import { of,from,range, fromEvent} from "rxjs";
import { map, mapTo, pluck} from "rxjs/operators";

/**
 * 
 * pluck('property') nos permite extraer el valor de alguna propiedad del objeto
 * 
 * pluck('property1')
 * pluck('property1','property2') for nested objects
 * 
 * 
 * 
 */


const keyup$ = fromEvent<KeyboardEvent>(document,'keyup')
                .pipe();

const keyupPluck$ = keyup$.pipe(pluck('target','baseURI'));

const keyupMapTo$ = keyup$
                    .pipe(
                        mapTo('Tecla presionada')
                    );

keyup$.subscribe(val => console.log('map',val));

keyupPluck$.subscribe(val => console.log('pluck',val));

keyupMapTo$.subscribe(val => console.log('mapTo',val));