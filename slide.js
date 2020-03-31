var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  var classname=''
  if(n<0){
    classname='fadeopp'
  }else{
    classname='fade'
  }
  showSlides(slideIndex += n, classname);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n,classname='') {
    if (document.readyState === 'complete') {
        const slides = document.getElementsByClassName("mySlide");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (let i=0; i<slides.length; i++) {
                slides[i].style.display = "none";
                slides[i].classList.remove('fade')
                slides[i].classList.remove('fadeopp')
                slides[i].classList.add(classname)
        }
        slides[slideIndex-1].style.display = "block";
    }
}

window.onload = window.setInterval(()=>{
    const slides = document.getElementsByClassName("mySlide");
    if(slideIndex >= slides.length){
      slideIndex = 1
      return showSlides(slideIndex,'fade')
    }else{
      slideIndex += 1
      return showSlides(slideIndex,'fade')
    }
  },2500)