import { fromEvent, combineLatest, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * Toma varios observables, y se subscribe siempre y cuando
 * todos los observables hayan omitido por lo menos un valor
 * y cada vez que uno emita un valor va a combinar el ultimo valor emitido
 * de los observables para crear la salida, se completa hasta que todas las subscripciones se completen
 * todas las de la lista y emite en forma de arreglo como el ejercicio de los paises y de los POKEMONS
 */

const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

combineLatest( [
    keyup$.pipe( pluck('type') ), 
    click$.pipe( pluck('type') )
]
).subscribe( console.log );

// const input1 = document.createElement('input');
// const input2 = document.createElement('input');

// input1.placeholder = 'email@gmail.com';

// input2.placeholder = '*********';
// input2.type = 'password'

// document.querySelector('body').append(input1, input2);


// // Helper
// const getInputStream = ( elem: HTMLElement ) => 
//     fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(
//         pluck<KeyboardEvent,string>('target','value'));


// combineLatest(
//     getInputStream( input1 ),
//     getInputStream( input2 ),
// ).subscribe( console.log )
