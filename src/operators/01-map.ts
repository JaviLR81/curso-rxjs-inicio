import { of,from,range, map, fromEvent} from "rxjs";

/**
 * 
 * of = toma argumen
 *  from = crea un observable en base a un array,objeto,promise,iterable,observable
 * 
 */

const mapPipe = map( (n:number) => n * 10 );
const obs$ = range(1,5).pipe( map( (n) => (n * 10).toFixed(2) ) )

obs$
.subscribe( console.log )

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup')
                .pipe( map( ev => ev.code) );


keyup$.subscribe(val => console.log('map',val));

