const img = document.getElementById('imageUniqueID')
const img2 = document.getElementById('imageUniqueID2')


var videocontainer = document.getElementById('videoID');
var videosource = document.getElementById('videoUniqueID');

var image1 = document.getElementById('imageUniqueID');
var image2 = document.getElementById('imageUniqueID2');

let previousgif1 = 2
let previousgif2 = 3



//console.log(image1)
//image1.setAttribute('src', '3.gif')

//makeRandomNumber = (Math.floor(Math.random() * (6 - 1)) + 1);



function changeVideo(newmp4) {
	videocontainer.pause();
	videosource.setAttribute('src', newmp4);
	videocontainer.load();
	//videocontainer.setAttribute('poster', newposter); //Changes video poster image
	videocontainer.play();
}

function changeImage1(newgif) {
	image1.setAttribute('src', newgif)
}

function changeImage2(newgif) {
	image2.setAttribute('src', newgif)
}




img.addEventListener('click', function () {

	makeRandomNumberForVideo = previousgif1;
	makeRandomNumberForImage = (Math.floor(Math.random() * (6 - 1)) + 1);
	while (
		makeRandomNumberForImage == makeRandomNumberForVideo ||
		makeRandomNumberForImage == previousgif1) {
		console.log("Current Video and Image Number: " + makeRandomNumberForVideo + " / " + makeRandomNumberForImage + " / " + previousgif1)
		makeRandomNumberForImage = (Math.floor(Math.random() * (6 - 1)) + 1);
	}

	previousgif1 = makeRandomNumberForImage;

	var newmp4 = makeRandomNumberForVideo + '.mp4';
	var newgif = makeRandomNumberForImage + '.gif';

	console.log('Click Image 1')
	changeVideo(newmp4);
	changeImage1(newgif)

})

img2.addEventListener('click', function () {

	makeRandomNumberForVideo = previousgif2;
	makeRandomNumberForImage = (Math.floor(Math.random() * (6 - 1)) + 1);
	while (
		makeRandomNumberForImage == makeRandomNumberForVideo ||
		makeRandomNumberForImage == previousgif2) {
		console.log("Current Video and Image Number: " + makeRandomNumberForVideo + " / " + makeRandomNumberForImage + " / " + previousgif2)
		makeRandomNumberForImage = (Math.floor(Math.random() * (6 - 1)) + 1);
	}

	previousgif2 = makeRandomNumberForImage;

	var newmp4 = makeRandomNumberForVideo + '.mp4';
	var newgif = makeRandomNumberForImage + '.gif';

	console.log('Click Image 2')
	changeVideo(newmp4);
	changeImage2(newgif)

})
