import { interval, fromEvent, from } from 'rxjs';
import { takeUntil, skip, tap, distinct, distinctUntilChanged } from 'rxjs/operators';

/**
 * 
 * 
 * distinct() solo permite la emisión de valores únicos, que no hayan sido emitidos previamente
 * usa el === strict comparator
 * 
 * 
 */


const numeros$ = from([1,"1",3,4,3,21,21]);


// numeros$
// .pipe(
//     distinct()
// )
// .subscribe({
//     next: resp => {
//      console.log('next',resp); 
//     },
//     error : e => {
      
//     },
//     complete: () => {
//         console.log('Complete');
//     }
// })


interface Personaje {
    nombre: string;
}


const personajes: Personaje[] = 
[
    {nombre: 'Megaman'},
    {nombre: 'Superman'},
    {nombre: 'Batman'},
    {nombre: 'Thor'},
    {nombre: 'Megaman'},
];

const personajes$ = from(personajes);

// personajes$
// .pipe(
//     distinct(p => p.nombre)
// )
// .subscribe(console.log);





/**
 * 
 * Emite siempre y cuando la emisión previa sea diferente a la actual
 * distincUntilChanged()
 */

 const numeros2$ = from([1,"1",3,4,3,21,21]);


 numeros2$
 .pipe(
     distinctUntilChanged()
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
 })

 const personajes2 :Personaje[] = 
[
    {nombre: 'Megaman'},
    {nombre: 'Superman'},
    {nombre: 'Thor'},
    {nombre: 'Thor'},
    {nombre: 'Megaman'},
];

const personajes2$ = from(personajes2);


personajes2$
.pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre) // devolver true significa que lo queremos bloquear
)
.subscribe(console.log);
 





