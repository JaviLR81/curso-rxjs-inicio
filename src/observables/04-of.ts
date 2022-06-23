
import {of} from 'rxjs';

/**
 * 
 * 
 * of()
 * cuando emite el último valor se completa automaticamente
 * los valores fluyen secuncialmente
 * 
 */


// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of([...1,2,3,4,5,6]); // hacer que un array sea secuencial al emitirse
const obs$ = of<any>([1,2],{a:1,b:2},function(){},Promise.resolve(true)); // solo emite un valor secuencialmente separado por ,

console.log('Inicio del observable'); // demostrando que no son del todo asincronos

obs$.subscribe( {
    next: resp => {
     console.log('next',resp); 
    },
    error : e => {
        console.log('error',e);
    },
    complete: () => {
        console.log('Terminamos la secuencia');
    }
} );

console.log('Fin del observable');