import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

/**
 * 
 * startWith() concatena al principio de la salida del observable
 * endWith()   concatena al final de la salida del observable
 * 
 */

const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z'),
);

numeros$.subscribe( console.log );



