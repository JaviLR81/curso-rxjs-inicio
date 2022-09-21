import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';



/**
 * 
 * Se subscribe a todas las emisiones internas de su source$ por eso no devuelve un observable sino los valores resultantes de la subscripción
 * Se completa hasta que todas las emisiones internas se completen y el externo para ejecutar el complete de la salida inicial
 * 
 */


const letras$ = of('a', 'b', 'c');


letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra + i ), 
        take(3)
    ))
)

.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});


const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$   = fromEvent( document, 'mouseup');
const interval$  = interval();

mousedown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe( console.log );