import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

/**
 * 
 * 
 * takeUntil() emite vlaores hasta que otro observable emite su primer valor
 * en este ejemplo estamos deteniendo el interval por medio de este operador
 * 
 * 
 */

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );


const counter$  = interval(1000);

// const clickBtn$ = fromEvent( boton, 'click' );

/**
 * En este caso en el segundo click ya vamos a empezar a emitir valores
 * también es bloqueante para los operadores que le siguen en cadena
 */
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap( () => console.log('tap antes de skip') ),
    skip(1),
    tap( () => console.log('tap después de skip') ),
)

counter$.pipe(
    takeUntil( clickBtn$ )
).subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
});











