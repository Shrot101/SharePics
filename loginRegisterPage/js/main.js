(function($) {

	"use strict";

})(jQuery);



	const imageDisplay = document.getElementById('profilepic');
	const imageData = document.getElementById('uploadimage');
	const imageUrl = URL.createObjectURL(imageData.files[0]);
	
	imageData.onchange = function loadImageFromLocalStorage() {
	if (imageData) {
		// Set the image source
		imageDisplay.style.backgroundImage =`url( ${imageUrl})`;
	} else {
		alert('No image found in local storage.');
	}
}
