import { ajax, AjaxError } from 'rxjs/ajax';


const URL = 'https://httpbin.org/delay/1';
// const URL = 'https://api.github.com/users?per_page=5';



const obs$ = ajax.getJSON( URL, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe( data => console.log('Somevariable', data))

