// * DOM ELEMENTS
const introSection = document.querySelector(`.intro`);
const video = introSection.querySelector(`video`);
const introTitle = introSection.querySelector(`h1`);

const aboutSection = document.querySelector(`.about`);
const aboutTitle = aboutSection.querySelector(`h1`);

// * SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// * SCENES -> WHERE THE ANIMATION WILL HAPPEN
const scene = new ScrollMagic.Scene({
	duration: 5000, // THE SAME AS THE VIDEO DURATION
	triggerElement: introSection, // WHICH ELEMENT TRIGGER THE ANIMATION
	triggerHook: 0, // WHERE THE SENCE STARTS -> 0 = top: 0
})
	.addIndicators() // SHOWS START/END INDICATORS
	.setPin(introSection) // THE PAGE WON'T SCROLL UNTIL THE SCENE ENDS
	.addTo(controller);

// * VIDEO ANIMATION
let accelAmount = 0.1; // AS THE VIDEO'S FRAME GOES FORWARD, WHEN ITS STOP, THAT APPLIES A "EASE-OUT" ANIMATION
let scrollPosition = 0;
let delay = 0;

scene.on(`update`, (e) => {
	scrollPosition = e.scrollPos / 1000; // scrollPos COMES FROM THE "e" EVENT FROM THE ".on" LISTENER | NOTHING TO DO WITH THE "scrollPosition" VARIABLE
});

setInterval(() => {
	delay += (scrollPosition - delay) * accelAmount;

	video.currentTime = delay;
}, 41.6); // 41 IS THE FRAME RATE, ADJUST ACCORDINLY -> 1 SECOND DIVIDED BY THE FRAME RATE, IN THIS CASE 24
