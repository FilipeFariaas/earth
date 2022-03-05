// * DOM ELEMENTS
const introSection = document.querySelector(`.intro`);
const video = introSection.querySelector(`video`);
const introTitle = introSection.querySelector(`h1`);

const aboutSection = document.querySelector(`.about`);
const aboutTitle = aboutSection.querySelector(`h1`);

// * SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// * SCENES -> WHERE THE ANIMATION WILL HAPPEN
// VIDEO ANIMATION
let videoScene = new ScrollMagic.Scene({
	duration: 5000, // THE SAME AS THE VIDEO DURATION
	triggerElement: introSection, // WHICH ELEMENT TRIGGER THE ANIMATION
	triggerHook: 0, // WHERE THE SENCE STARTS -> 0 = top: 0
})
	// .addIndicators() // SHOWS START/END INDICATORS
	.setPin(introSection) // THE PAGE WON'T SCROLL UNTIL THE SCENE ENDS
	.addTo(controller);

// TITLE ANIMATION
const introTitleAnimation = TweenMax.fromTo(introTitle, 4, { opacity: 1 }, { opacity: 0 });

let introTitleScene = new ScrollMagic.Scene({
	duration: 4000,
	triggerElement: introSection,
	triggerHook: 0,
})
	// .addIndicators() // SHOWS START/END INDICATORS
	.setTween(introTitleAnimation)
	.addTo(controller);

let accelAmount = 0.05; // AS THE VIDEO'S FRAME GOES FORWARD, WHEN ITS STOP, THAT APPLIES A "EASE-OUT" ANIMATION
let scrollPosition = 0;
let delay = 0;

videoScene.on(`update`, (e) => {
	scrollPosition = e.scrollPos / 1000; // scrollPos COMES FROM THE "e" EVENT FROM THE "on" LISTENER | NOTHING TO DO WITH THE "scrollPosition" VARIABLE
});

setInterval(() => {
	delay += (scrollPosition - delay) * accelAmount;

	video.currentTime = scrollPosition;
	// video.currentTime = delay; // UNCOMMENT TO ADD DELAY
}, 41.6); // 41 IS THE FRAME RATE, ADJUST ACCORDINLY -> 1 SECOND DIVIDED BY THE FRAME RATE, IN THIS CASE 24
