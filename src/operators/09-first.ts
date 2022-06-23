import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';


/**
 * 
 * Algunos usan take(1) en vez de first
 * first() tomar el primero o tomar el primero que cumpla alguna condición
 * 
 *  
 * 
 */

const click$ = fromEvent<MouseEvent>(document,'click');

click$
.pipe(
    tap(console.log),
    map( ({clientX,clientY}) => ({ clientY: clientY, clientX: clientX })),
    first(x => x.clientY >= 150)
)
.subscribe({
    next: resp => {
     console.log('next',resp); 
    },
    error : e => {
      
    },
    complete: () => {
        console.log('Complete');
    }
});