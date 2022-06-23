import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


/**
 * Emite el valor más reciente de un observable después de un periodo de tiempo
 */


const click$ = fromEvent<MouseEvent>( document, 'click');



click$.pipe(
    map( ({ x }) => x ),
    tap(val => console.log('tap', val) ),
    auditTime(5000)
).subscribe( console.log );


