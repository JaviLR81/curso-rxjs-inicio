import { from, fromEvent, of } from 'rxjs';
import { first, map, take, takeWhile, tap } from 'rxjs/operators';


/**
 * 
 * takeWhile()
 *
 * 
 */

const click$ = of(1,2,3,72,5);

click$
.pipe(
    tap(console.log),
    takeWhile(x => x < 4, false) // el último argumento maneja si deseamos la emisión del elemento que rompe la condición
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