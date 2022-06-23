import { interval, fromEvent, from } from 'rxjs';
import { takeUntil, skip, tap, distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';


/**
 * 
 * distincUntilKeyChanged() hace referencia directamente a la key que queremos evaluar si ha cambiado o no
 */

 interface Personaje {
    nombre: string;
}


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
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log);
 





