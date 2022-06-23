import { of,from} from "rxjs";

/**
 * 
 * of = toma argumen
 *  from = crea un observable en base a un array,objeto,promise,iterable,observable
 * 
 */

const observer = {
    next: resp => {
     console.log('next',resp); 
    },
    error : e => {
      
    },
    complete: () => {
        console.log('Complete');
    }
}

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}


const miIterable = miGenerador();

// for(let id of miIterable){
//     console.log('id',id);
// }

from(miIterable).pipe().subscribe(observer);


// const source$ = from([1,2,3,4,5]);
// const source$ = from('Javier Lozano');


const source$ = from( fetch('https://api.github.com/users/klerith') );

// source$.subscribe(async (resp) => {
//     const dataResp = await resp.json();
//     console.log('dataResp',dataResp);
// })




// source$.subscribe(observer);

