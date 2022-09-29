import { Observer, share, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

/**
 * 
 * 
 * share() this operator allow to share source data Observable to any subscribers that has an active subscription
 * if a subscription comes while the process is running it will receive the data that are emitting in this moment
 * but if any subscription is active then the process will be closed and if some new subscriber appears then
 * a new subscription will be created and a new entire clcle
 * 
 * 
 * 
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

// const source = interval(1000).pipe(
//     tap(x => console.log('Processing: ', x)),
//     map(x => x),
//     take(5),
//     share()
//     // shareReplay({
//     //     bufferSize:1,
//     //     refCount: false
//     // })
//   );


  const URL = 'https://httpbin.org/delay/1';
  // const URL = 'https://api.github.com/users?per_page=5';

  const source = ajax.getJSON( URL, {
      'Content-Type': 'application/json',
      'mi-token': 'ABC123'
  }).pipe( tap(data => console.log('Proccesing')) ,share());
   
//   source.subscribe(observer);
//   source.subscribe(observer);

  source.subscribe(x => console.log('subscription 1: ', x));
  source.subscribe(x => console.log('subscription 2: ', x));

// setTimeout(() => {
//     console.log('')
//     console.log('==========')
//     console.log('')
//     source.subscribe(x => console.log('subscription 3: ', x));
// }, 8000);


