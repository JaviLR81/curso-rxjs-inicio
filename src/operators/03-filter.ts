import { from, fromEvent, range } from "rxjs";
import { filter, map, pluck} from "rxjs/operators";

/**
 * 
 * 
 * 
 * 
 */


const obs$ = range(20,30)
                .pipe(
                    filter( (n,i) => {
                        // console.log('index i',i);
                       return n % 2 === 1
                    })
                 );

// obs$.subscribe( x => console.log('Value: ',x));


const personajes = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
    {
        tipo: 'heroe',
        nombre: 'Superman'
    },
    {
        tipo: 'villano',
        nombre: 'Doctor Octopus'
    },
];

const obsHeroes$ = from(personajes)
                        .pipe(
                            filter( h => h.tipo === 'heroe' )
                        )
                        
const keyup$ = fromEvent<KeyboardEvent>(document,'keyup')
.pipe(
    map( ev => ev.code ),
    filter( code => code === 'Enter')
);

keyup$.subscribe(console.log);



obsHeroes$.subscribe( heroe => console.log('heroes', heroe))       




let esHeroe = (h) => h.tipo === 'heroe';
let heroesSinRXJS = personajes.filter(esHeroe);

console.log();
console.log('heroesSiuniRXJS',heroesSinRXJS);

