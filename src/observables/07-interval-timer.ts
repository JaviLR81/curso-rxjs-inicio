import { interval, observeOn, of,range, timer  } from "rxjs";

/**
 * Ambos son asíncronos por naturaleza
 * interval() es asincrono por naturaleza
 * timer() es asíncrono por naturaleza
 * 
 */
const observer = {
    next: resp => {
        console.log('next',resp);
    },
    error : e => {
      
    },
    complete: () => {
        console.log('completed');
    }
}

// valor inicial es 0
const interval$ = interval(1000);

//  valor inicial es 0, emite después de el tiempo indicado y se completa
// const timer$ = timer(5000);

// como un interval, que inicie en dos segundos y cada segundo incremente
// const timer$ = timer(2000,1000);


const hoyEn5 = new Date(); // programar un momento especifico para emitir algo en la línea del tiempo
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer$ = timer(hoyEn5);


console.log('Inicio');

// interval$.subscribe(observer);
timer$.subscribe(observer);

console.log('Fin');
