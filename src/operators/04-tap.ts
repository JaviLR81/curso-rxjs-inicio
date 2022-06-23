import { from, fromEvent, range } from "rxjs";
import { filter, map, pluck, tap} from "rxjs/operators";

/**
 * 
 * 
 * 
 * 
 */
const numeros$ = range(1,5);

numeros$.pipe(
    tap( {   // tiene el comportamiento de un observer
        next: resp => {
          console.log('resp',);
        },
        error : e => {
          console.log('Ocurrio un error en el tap');
        },
        complete: () => {
            console.log('Fuí el complete del TAP');
        }
    } )
    ,
    map( v => v * 10 ),
    tap({
        next: valor => console.log('Somevariable',valor),
        complete: ()  => console.log('Se ejecuto todo')
    })
)
.subscribe(console.log);