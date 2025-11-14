

const questionTemplate = document.body.innerHTML;


const img = document.getElementById('imageUniqueID')
const text2 = document.getElementsByClassName('body')
let makeRandomNumber;
let previousRandomNumber;
let CurrentImageNumber = "2.gif";
let CurrentVideoNumber = "1.mp4";

let NewImageNumber;
let NewVideoNumber = "2.mp4";


let firstTimeRun = true;

console.log(img)

function replace() {


	previousRandomNumber = makeRandomNumber;

	makeRandomNumber = (Math.floor(Math.random() * (4 - 1)) + 1);

	while (previousRandomNumber === makeRandomNumber) { makeRandomNumber = (Math.floor(Math.random() * (4 - 1)) + 1); }

	NewImageNumber = makeRandomNumber + ".gif";

	console.log("Make Random Number: " + makeRandomNumber)





	document.body.innerHTML = "";
	document.body.innerHTML += questionTemplate
		.replace(CurrentImageNumber, NewImageNumber)
		.replace(CurrentVideoNumber, NewVideoNumber);


	NewVideoNumber = makeRandomNumber + ".mp4";



	const img = document.getElementById('imageUniqueID')
	img.addEventListener('click', function () {

		//console.log('Click')
		replace();

	})

}

img.addEventListener('click', function () {

	//console.log('Click')
	replace();
	let firstTimeRun = false;

})

