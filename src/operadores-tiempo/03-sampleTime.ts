import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

/**
 * 
 * Cada N segundos va a tomar la última emisión y la emite
 * en caso no haya algo emitido no emite nada
 * 
 */

const click$ = fromEvent<MouseEvent>( document, 'click');


click$.pipe(
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y }) ),
).subscribe( console.log );






