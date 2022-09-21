import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';


/**
 * 
 * Trabaja recibiendo observables que deben 
 * de ser finitos, una vez que estos se completan absolutamente todos
 * entonces se va a producir una unica emisión de el ultimo valor de los mismos en forma
 * de un arreglo pero igual se puede regresar como un objeto
 * 
 */

const numeros$   = of(1,2,3,4);
const intervalo$ = interval(1000).pipe( take(3) ); //0..1..2 
const letras$    = of('a','b','c').pipe( delay(3500) );

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe( console.log  )

// forkJoin(
//     numeros$,
//     intervalo$,
//     letras$
// ).subscribe( resp => {
//     console.log('numeros: ', resp[0] )
//     console.log('intérvalo: ', resp[1] )
//     console.log('letras: ', resp[2] )
// });

// forkJoin({
//     numeros$,
//     intervalo$,
//     letras$
// }).subscribe( resp => {
//     console.log(resp)
// });

forkJoin({
    num: numeros$,
    int: intervalo$,
    let: letras$
}).subscribe( resp => {
    console.log(resp)
});


