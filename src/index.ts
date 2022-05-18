import './styles/main.scss'
import { fromEvent, throttleTime } from "rxjs";



(function(){
    const block:HTMLElement = document.querySelector(".block");
    const button = document.querySelector('.btn-main')
    button.addEventListener('click',()=>{
        console.log('hola mundo')
        block.style.backgroundColor="blue";
    })


    const observableButton$ = fromEvent(button, 'click');
    
    observableButton$
    .pipe(throttleTime(2000))
    .subscribe(()=>{
        console.log('en este caso cambiar el color')
    })

})()


/**
 * Stream: Click
 * 
 * 
 * Observable: fromEvent
 * 
 * 
 * 
 * Subscription: Escribe en consola 
 * 
 */