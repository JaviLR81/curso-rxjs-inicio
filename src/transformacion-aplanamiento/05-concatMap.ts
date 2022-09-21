import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';

/**
 * Concatena los observables que se van emitiendo
 * y los va despachando conforme se van completando
 */

const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

click$.pipe(
    // switchMap( () => interval$ )
    concatMap( () => interval$ )
)
.subscribe( console.log );