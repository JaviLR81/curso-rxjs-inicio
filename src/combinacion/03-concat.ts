import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';


/**
 * 
 * Recibe observables como parametros o un iterable
 * concat() no es un operador, sino es una función que permite
 * emitir la salidad de varios observables en forma secuencial, en una única salida
 * sin embargo la emisión es secuencial hasta terminar un obs$ pasa al siguiente y al siguiente
 * si algún observable no se completa previamente no continua hasta que se termie, y la subscripción
 * se completa cuando todos los observables se hayan completado y emitido
 * 
 */

const interval$ = interval(1000);

concat(
    interval$.pipe( take(3) ), // se ejecuta de inicio
    interval$.pipe( take(2) ), // se ejecuta si se completa el anterior
    of(1500), // se ejecuta si se completa el anterior,
    of([1, 2, 3, 4])
).subscribe( console.log )


