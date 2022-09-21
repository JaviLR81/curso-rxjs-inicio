import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';


/**
 * 
 * Emite inmediato y espera N segundos
 * hasta volver a considerar alguna emisión siempre emite el primer 
 * valor al pasar el tiempo indicado
 * 
 */

const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000)
)//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent( input, 'keyup' );

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: false, // primero
        trailing: true // ultimo
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe( console.log );










