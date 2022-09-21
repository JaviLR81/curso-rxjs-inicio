import { asyncScheduler } from "rxjs";

/**
 * 
 * Es asíncrono. e imita estas dos funciones
 * 
 * setTimeOut()
 * setInterval()
 */
const saludar = () => console.log('Hola Mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
const saludar3 = (nombre) => console.log(`Hola ${nombre}`);

// manando la definición de la función por eso no los saludar()
asyncScheduler.schedule( saludar, 2000  );
asyncScheduler.schedule( saludar2, 2000, 'JavierLozano');

// no podemos usar una arrow function
// const subs = asyncScheduler.schedule( function(state){ // creando un interval()
//     console.log('state',state);
//     this.schedule(state + 1, 1000);
// },3000,0);



// setTimeout(() => {
//     subs.unsubscribe(); // matando el intervalo y la subscripción
// }, 6000);


// asyncScheduler.schedule( () => {
//     subs.unsubscribe();
// },6000)