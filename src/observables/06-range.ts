import { asyncScheduler, of,range  } from "rxjs";

/**
 * 
 * Emitiendo eventos al hacer scroll o alguna acción
 * fromEvent<Event>()
 * 
 */

// const src$ = of(1,2,3,4,5);
// src$.subscribe(console.log);

console.log('Inicio');

let obs$ = range(1,5,asyncScheduler);
obs$.subscribe(console.log);

console.log('Fin');
