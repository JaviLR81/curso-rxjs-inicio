import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const obs$ = interval(500);

obs$.pipe(
    take(3), // completa el observable después de n valores tomados
    tap(console.log),
    reduce((acc,curr) => acc + curr, 5)
).subscribe( console.log );


