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

const invertalo$ = new Observable<number>( subscriber => {

    let i = 0;
    const intervalo = setInterval( () => {
        i++;
        subscriber.next(i);
        console.log('i',i);
    },1000)


    setTimeout(() => {
        subscriber.complete();
    }, 1500);

    // procedimiento que quiero que se ejecuta en el unsubscribe
    return () => {
        clearInterval(intervalo);
        console.log('Intervalo destruido');
    }
});


const subscription = invertalo$
                        .subscribe(observer);
const subscription2 = invertalo$
                        .subscribe(observer);                        
const subscription3 = invertalo$
                        .subscribe(observer);      

subscription.add(subscription2);
subscription2.add(subscription3);                        

setTimeout(() => {
    subscription.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('Completado timeout');
}, 6000);                       