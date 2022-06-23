import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
        next: resp => {
          console.log('Siguiente desde el observer: '+resp);
        },
        error : e => {
            console.warn('Error en el  observer: '+e);
        },
        complete: () => {
            console.log('Complete en el observer');
        }
}

const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Mundo');

    // enforcing an error
    // const a = undefined;
    // a.nombre = 'Javi';

    subscriber.complete();
});

obs$.subscribe( console.log );


obs$.subscribe( 
    // {
    //     next: valor => {
    //         console.log('next: '+valor)
    //     },
    //     error : e => {
    //         console.warn(e);
    //     },
    //     complete: () => {
    //         console.log('Complete el observable');
    //     }
    // }

    observer
);

console.log('Javi!');








