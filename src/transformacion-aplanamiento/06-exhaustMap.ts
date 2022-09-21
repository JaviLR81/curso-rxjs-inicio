import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

/**
 * Ignora las subscripciones nuevas
 * dando prioridad a la subscripción que en ese momento esta tomando
 * Solo maneja una subscripción activa
 * Util cuando hay un submit con la tecla enter
 * prevenir dobles submits
 */

const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );




