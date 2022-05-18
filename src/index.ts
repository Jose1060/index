import "./styles/main.scss";
import { fromEvent, interval, throttleTime } from "rxjs";

(function () {
	const block: HTMLElement = document.querySelector(".container");
	const button = document.querySelector(".btn-main");
	const title: HTMLElement = document.querySelector(".title");

	button.addEventListener("click", () => {
		console.log("hola mundo");
		block.style.backgroundColor = "yellow";
		title.innerHTML = "Es de dia";
		title.style.color = "black";
	});

	const observableButton$ = fromEvent(button, "click"); //Observable

	//Subscription
	observableButton$.pipe(throttleTime(5000)).subscribe(() => {
		console.log("En este caso cambiar el color");
		block.style.backgroundColor = "darkblue";
		title.innerHTML = "Es de noche";
		title.style.color = "white";

		// const contador = interval(1000);
		// contador.subscribe((n) => {
		// 	console.log("Contador", n);
		// });
	});
})();

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
