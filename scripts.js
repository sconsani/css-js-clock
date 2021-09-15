console.log("testing");

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
	const now = new Date();
	const seconds = now.getSeconds();
	//you need to add the 90 to account for setting it at 90 deg in your css to have it start at the top of the clock at 12
	const secondsDegrees = ((seconds/60)* 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	//60 minutes per hour, * 360 for the full circle. +90 to account for where it starts
	const minsDegrees = ((mins/60)*360) +90
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hour = now.getMinutes();
	//60 minutes per hour, * 360 for the full circle. +90 to account for where it starts
	const hourDegrees = ((mins/12)*360) +90
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);