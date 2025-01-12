import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, map } from 'rxjs/operators';

/**
 * Cancela las emisiones intermedias y solo va a emitir la última
 * cada N segundos
 */

const click$ = fromEvent( document, 'click' );

click$.pipe(
    debounceTime(3000)
);//.subscribe( console.log );

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    // map( ev => ev.target['value'] ),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe( console.log );




