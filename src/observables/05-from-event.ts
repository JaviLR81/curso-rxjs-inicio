import { fromEvent  } from "rxjs";

/**
 * 
 * Emitiendo eventos al hacer scroll o alguna acción
 * fromEvent<Event>()
 * 
 */

/** DOM EVENTS */
const src1 = fromEvent<MouseEvent>(document,'click');
const src2 = fromEvent<KeyboardEvent>(document,'keyup');

const observer = {
    next: resp => {
        console.log('next',resp);
    },
    error : e => {
      
    }
}

// event.x ({x})
src1.subscribe( ({x,y}) => {
    console.log('x',x);
    console.log('y',y);
});

src2.subscribe( evento => {
    console.log('evento',evento.key);
});