import { of } from 'rxjs';
import { take } from 'rxjs/operators';


/**
 * 
 * take()
 * cancela la emisión del observable después de tomar los valores que necesita
 *  
 * 
 */

const numeros$ = of(1,2,3,4,5).pipe(take(3));


numeros$
// .pipe(
//     tap(console.log),
//     take(3)
// )
.subscribe({
    next: resp => {
     console.log('next',resp); 
    },
    error : e => {
      
    },
    complete: () => {
        console.log('complete');
    }
})