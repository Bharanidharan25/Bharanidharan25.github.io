function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    //this takes a callback function which receives two arguments: the elemts list and the observer instance
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, options);
  observer.observe(el);
}

window.onload = function () {
  scrollTrigger(".skillset .about-container");
  scrollTrigger(".skillset .skill");
  scrollTrigger(".career .container");
  scrollTrigger(".about .about-content");
  scrollTrigger(".work-together .container");
  scrollTrigger(".main .head");
  scrollTrigger(".main .name");
  scrollTrigger(".main .content .para");
  scrollTrigger(".button");

  let scrollWidth = 0;
  let totalScrollWidth = $(".card-slider")[0].scrollWidth;

  $("#right-arrow").click(function (e) {
    e.preventDefault();
    $("#card-slider")[0].scrollBy({
      top: 0,
      left: scrollWidth+120,
      behavior: "smooth",
    });
    scrollWidth += 120;
  });

  $("#left-arrow").click(function (e) {
    e.preventDefault();
    $("#card-slider")[0].scrollBy({
      top: 0,
      left: ((scrollWidth - 120)<=0) ? -1 : -(scrollWidth-120),
      behavior: "smooth",
    });
    scrollWidth -= 120;
  });

  $(".card-slider").scroll(function () {
    if ($(".card-slider").scrollLeft() !== 0) {
      $("#left-arrow").css("display", "block");
    } else {
      $("#left-arrow").css("display", "none");
      $("#right-arrow").css("display", "block");
    }

    var $elem = $(".card-slider");
    var newScrollLeft = $elem.scrollLeft(),
      width = $elem.width(),
      scrollWidth = $elem.get(0).scrollWidth;
    if (Math.floor (scrollWidth - newScrollLeft - width) <= 0) {
      $("#right-arrow").css("display","none")
    }else{
      $("#right-arrow").css("display","block")
    }
  });

  $("#scrollMore").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#skillset").offset().top,
      },
      1500
    );
  });
};
