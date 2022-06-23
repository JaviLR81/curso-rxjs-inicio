import { catchError, map, of, pluck, throwError } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const URL = 'https://api.github.com/usersXX?per_page=5';

const manejaErrores = (response: Response) => {
    if( !response.ok )
    {
        throw new Error( response.statusText );
    }

    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn("error en: ", err);
    return of([]);
}


const fetchPromesa = fetch( URL );

// fetchPromesa
//     .then( resp => resp.json()  )
//     .then( data => {
//         console.log('data: ', data);
//     })
//     .catch(err => console.warn('Error en usuarios', err));
    
// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json()  )
//     .then( data => {
//         console.log('data: ', data);
//     })
//     .catch(err => console.warn('Error en usuarios', err));


ajax( URL )
.pipe(
    pluck('response'),
    catchError( atrapaError )
)
.subscribe(users => console.log('users: ', users))