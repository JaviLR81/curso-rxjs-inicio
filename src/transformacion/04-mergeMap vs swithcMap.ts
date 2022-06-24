import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';



const click$    = fromEvent( document, 'click' );
const interval$ = interval(1000);


click$.pipe(
    switchMap( () => interval$ ), // solo mantiene una subscripción activa corriendo
    // mergeMap( () => interval$ ), // mantiene muchas subscripciones activas corriendo
).subscribe( console.log );


