import { interval, concat, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';


/**
 * 
 * Recibe observables como parametros o un iterable
 * 
 */

const interval$ = interval(1000);

concat(
    interval$.pipe( take(3) ), // se ejecuta de inicio
    interval$.pipe( take(2) ), // se ejecuta si se completa el anterior
    of(1500), // se ejecuta si se completa el anterior,
    of([1, 2, 3, 4])
).subscribe( console.log )


