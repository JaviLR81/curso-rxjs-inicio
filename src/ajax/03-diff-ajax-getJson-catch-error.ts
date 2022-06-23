import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const URL = 'https://httpbinz.org/delay/1';
// const URL = 'https://api.github.com/users?per_page=5';


const manejaError = (resp: AjaxError) => {
    console.warn('Error', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON( URL )
// .pipe(
//     catchError( manejaError )
// );

// const obs2$ = ajax( URL )
// .pipe(
//     catchError( manejaError )
// );

const obs$ = ajax.getJSON( URL );

obs$
.pipe(
    catchError( manejaError )
)
.subscribe({
    next: resp => {
        console.log('next', resp);
    },
    error : e => {
      console.warn('Error', e);
    },
    complete: () => console.log('Complete')
})
