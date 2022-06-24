import { Observable, Observer } from 'rxjs';

/**
 * 
 */
const observer: Observer<any> = {
        next: resp => {
          console.log('Next: '+resp);
        },
        // Al caer en el error abruptamente termina el observable
        // y no llega al complete()
        error : e => {
            console.warn('Error: '+e);
        },
        complete: () => {
            console.log('Complete en el observer');
        }
}

const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Mundo');

    // Enforcing an error
    // const a = undefined;
    // a.nombre = 'Javi';

    // Ninguna emisión después de esta se va a notificar
    // a los subscriptores
    subscriber.complete();

    subscriber.next('Fuimos');
    subscriber.next('Ignorados');
});


obs$.subscribe(resp =>  console.log('Subscriptor 1', resp));
obs$.subscribe(resp => console.log('Subscriptor 2', resp));
obs$.subscribe(observer);