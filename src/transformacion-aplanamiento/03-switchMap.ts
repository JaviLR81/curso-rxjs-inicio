import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, switchMap } from 'rxjs/operators';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
const URL = 'https://httpbin.org/delay/1?arg='

/**
 * A diferencia de mergeMap(), 
 * switchMap() cancela los observables que antes fueron emitidos
 * solo manteniendo la última emisión de la fuente como subscripción activa
 */
input$.pipe(
    pluck('target', 'value'),
    switchMap(texto => ajax.getJSON(URL + texto))
).subscribe(console.log);

