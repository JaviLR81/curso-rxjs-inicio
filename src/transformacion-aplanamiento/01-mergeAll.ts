import { debounceTime, fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeAll, pluck } from 'rxjs/operators';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';


/**
 * Se suscribe internamente a los observbles que el source$ emita y los emite juntos en una salida unificada
 * y se completa cuando se completan los obs$ hijos o en su caso si no hay algún hijo pendiente cuando
 * se complete el padre
 */

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';


    for( const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }

}

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    // pluck<KeyboardEvent, string>('target','value'), // has an error with typing
    map<KeyboardEvent, string>(evento => evento.target['value']),
    map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(`https://api.github.com/search/users?q=${ texto }`)),
    mergeAll<Observable<GithubUsersResp>>(),
    // map<GithubUsersResp, GithubUser[]>( resp => resp.items )
    pluck<GithubUsersResp, "items">('items')
)
.subscribe( mostrarUsuarios );

