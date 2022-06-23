import { from, interval } from 'rxjs';
import { map, reduce, scan, take, tap } from 'rxjs/operators';


/**
 * 
 * A diferencia del reduce scan() va emitiendo cada vez
 * que hay un valor que se acumula, 
 * 
 */

const obs$ = from([1,2,3,4,5]);

const acumulador = (acc,curr) => acc + curr;

console.log('Scan');
obs$.pipe(
    scan( acumulador ,5)
).subscribe( console.log );


console.log('Reduce');
obs$.pipe(
    reduce( acumulador ,5)
).subscribe( console.log );



// Scan podria ser la base de el patron REDUX
interface Usuario {
    id?:string;
    autenticado?:boolean;
    token?:string;
    edad?:number;
}

const user:Usuario[] = [   
    {
        id:'Fher',autenticado: false,token: null, edad: 12
    },
    {
        id:'Fher',autenticado: true,token: 'abc', edad: 12
    },
    {
        id:'Fher',autenticado: true,token: 'abc123', edad: 12
    }
];


const state$ = from(user).pipe(
    scan( (acc,curr) => {
        // extrayendo las propiedades y creando una nueva instancia
        return {
            ...acc,...curr
        }
    },{edad: 33})
)

const id$ = state$.pipe(
    map( (state:any) => state)
)

id$.subscribe(console.log)