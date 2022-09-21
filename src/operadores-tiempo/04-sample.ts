import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';

/**
 * 
 * sample() Emite el último valor no emitido cada vez que el obs$ condición emita un valor
 * 
 */


const interval$ = interval(500);
const click$    = fromEvent( document, 'click' );



interval$.pipe(
    sample(click$)
).subscribe( console.log );




