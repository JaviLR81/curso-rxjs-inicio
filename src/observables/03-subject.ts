import { Observable, Observer, Subject } from 'rxjs';

/**
 * 
 * subject() 
 * 
 * 
 */

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

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( () => {
        subs.next(Math.random())
    },1000);


    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});


/**
 * 1.- Casteo múltiple, distribuir misma info en varios lados
 * 2.- También es un observer
 * 3.- Next, error y complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );

    const sub1 = subject$.subscribe(observer);
    const sub2 = subject$.subscribe(observer);

    setTimeout(() => {
        subject$.next(10);
        subject$.complete();
        subscription.unsubscribe();
    }, 3500);

/*
    const sub1 = intervalo$.subscribe( rnd => {
        console.log("Sub1: "+rnd);
    });

    const sub2 = intervalo$.subscribe( rnd => {
        console.log("Sub2: "+rnd);
    });
*/

