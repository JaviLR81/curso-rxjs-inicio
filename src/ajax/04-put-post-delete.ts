import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const URL = 'https://httpbin.org/delay/1';


// ajax.post( URL, { id: 1, nombre: 'Fernando'}, {

//     'mi-token': 'ABC123'

// })
// .subscribe(console.log);


ajax({
    url: URL,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
})
.subscribe(console.log)