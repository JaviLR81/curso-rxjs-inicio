import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * 
 * 
 * merge() es una función emite observables de manera alternanda es decir si el obs$1 emite algo sale si el obs$2 emite algo sale
 * vuelve a emitir el obs$1 sale
 * cuando los dos se completen entonces se lanza el complete() de la subscripción()
 * 
 * 
 */

const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge( 
    keyup$.pipe( pluck('type') ), 
    click$.pipe( pluck('type') )
).subscribe( console.log );



