let slideNumber = 0;
let sliderCount = 1;
let slides;
let slideTime = 15000;

$(document).ready(function() {
  sliderCount = document.getElementsByClassName('slide').length;
  slides = document.getElementsByClassName('slide');
  console.log(sliderCount);
  window.setInterval(slide, slideTime);
  window.setInterval(playVid, slideTime);
  $('body').on('keypress',function(){
      slide();         
  });


  var videos = document.getElementsByTagName('video');
  function playVid() {
    for (let i = 0; i < videos.length; i++) {
      if($.contains(slides[slideNumber % sliderCount], videos[i]) && videos[i].currentTime == 0){
        videos[i].play();
      }else if(!$.contains(slides[slideNumber % sliderCount], videos[i])) {
        videos[i].pause();
        videos[i].currentTime = 0;
      }
    }
  }

});

function slide() {
  slideNumber++;
  let left = -(slideNumber % sliderCount)*100;
  $("#container").css('left', left + 'vw');
}
