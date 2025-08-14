(function () {
  "use strict";

  // Слайдер на главной
  $(".js-collection-data").on("click", function (e) {
    e.preventDefault();
    $(".js-collection-data").removeClass("active");
    $(this).addClass("active");

    let year = $(this).data("year"),
      url = $(this).data("url"),
      src = $(this).text(),
      id = $(this).data("id");

    $(".js-collection-img").fadeOut(300);
    setTimeout(function () {
      $(".js-collection-year").text(year);
      $(".js-collection-btn").attr("href", url);
      $(".js-collection-img").attr(
        "src",
        "assets/images/home-carousel/" + src + ".png"
      );
      $(".home-category__pic source").attr(
        "srcset",
        "assets/images/home-carousel/" + src + ".png"
      );
      $('.home-category__pic source[type="image/webp"]').attr(
        "srcset",
        "assets/images/home-carousel/" + src + ".webp"
      );
      $(".js-collection-img").fadeIn(300);
    }, 300);
  });

  $(".slider__owl").owlCarousel({
    loop: true,
    margin: 0,
    center: true,
    nav: true,
    dots: false,
    navText: [
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
<path d="M28.25 30.25L24.75 27L28.25 23.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
<path d="M25.75 23.75L29.25 27L25.75 30.25" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    ],
    autoplay: false,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    //animateOut: "fadeOut",
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
      },
      768: {
        items: 3,
        autoWidth: true,
      },
      1340: {
        items: 5,
      },
    },
  });

  $(".product-page__related").owlCarousel({
    loop: true,
    margin: 0,
    center: false,
    nav: true,
    dots: false,
    navText: [
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
<path d="M28.25 30.25L24.75 27L28.25 23.75" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
      `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27" cy="27" r="27" fill="#F3F3F3"/>
<path d="M25.75 23.75L29.25 27L25.75 30.25" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    ],
    autoplay: false,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    items: 4,
    //animateOut: "fadeOut",
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1339: {
        items: 4,
      },
    },
  });
  $("#slider-range").slider({
    range: true,
    min: 1,
    max: 8500,
    values: [650, 5000],
    slide: function (event, ui) {
      $("#amount .t1").text("от " + ui.values[0]);
      $("#amount .t2").text("до " + ui.values[1]);
    },
  });
  $("#amount .t1").text("от " + $("#slider-range").slider("values", 0));
  $("#amount .t2").text("до " + $("#slider-range").slider("values", 1));

  $('.js-open-img').on('click', function (e) {
    e.preventDefault();
    let img = $(this).attr('href');
    $('body').addClass('show-event-popup');
  });

  $('.pp-window__close, .pp-window__background').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('show-event-popup');
  });

  const jsSelectric = $(".js-selectric");
  if (jsSelectric.length) {
    jsSelectric.selectric({
      nativeOnMobile: false,
    });
  }

  const mobileMask = $(".js-mobileMask");
  if (mobileMask.length) {
    mobileMask.mask("+7 (000) 000 00 00", {
      placeholder: "+7 (___) ___ __ __",
    });
  }

  const dateField = $(".js-dateField");
  if (dateField.length) {
    const pickerInit = function (pick) {
      const dateInput = pick.find(".js-dateInput");
      const dateDay = pick.find(".js-dateDay");
      const dateMonth = pick.find(".js-dateMonth");
      const dateYear = pick.find(".js-dateYear");
      const dateConfig = {
        autoClose: true,
        minDate: new Date(),
        navTitles: {
          days: "MMMM <i>yyyy</i>",
        },
        onSelect: function ({ date }) {
          dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
          dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
          dateYear.val(date ? date.getFullYear() : "");
        },
      };
      new AirDatepicker(dateInput[0], dateConfig);
    };
    $.each(dateField, function (i) {
      pickerInit($(this));
    });
  }

})();



$(".js-open-filter").on("click", function (e) {
  e.preventDefault();
  $(".page-listing__aside").addClass("active");
});
$(".js-close-filter").on("click", function (e) {
  e.preventDefault();
  $(".page-listing__aside").removeClass("active");
});



const btnToggleMenu = (e) => {
  if (!e) return false;
  let el = document.querySelector(e);
  let hasClass = el.classList.contains("active");
  hasClass ? el.classList.remove("active") : el.classList.add("active");
};

let btnMobileMenu = document.querySelector(".js-toogle-menu");

if (btnMobileMenu)
  btnMobileMenu.addEventListener("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this)
        .find("use")
        .attr("xlink:href", "assets/icons/symbols.svg#menu-close");
    } else {
      $(this)
        .find("use")
        .attr("xlink:href", "assets/icons/symbols.svg#toggle-menu");
    }
    btnToggleMenu(".header__right");
  });

document.querySelectorAll(".address-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let c = "56.45836800750285, 84.95157238147858";
    const mapUrl = this.dataset.coord1 + "," + this.dataset.coord2;
    console.log(mapUrl);
    //google.maps.event.trigger(contactsMap, 'resize');
    //document.getElementById('map-frame').src = mapUrl;
    // Добавляем активный класс для визуального обратной связи
    document
      .querySelectorAll(".address-link")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    initMap(this.dataset.coord1, this.dataset.coord2);
  });
});

initMap("56.49023801050494", "84.94883710756447");
// map google
function initMap(l, p) {
  const contactsMap = document.querySelector("#js-contactsMap");
  if (contactsMap) {
    //const mapStyles = mapStylesArr; //здесь должен быть задан JSON со стилями
    const mapCenter = new google.maps.LatLng(l, p);
    const mapOptions = {
      center: mapCenter,
      disableDefaultUI: true,
      draggable: true,
      gestureHandling: "cooperative",
      scrollwheel: false,
      //styles: mapStyles,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    };
    const map = new google.maps.Map(contactsMap, mapOptions);
    const point = new google.maps.LatLng(l, p);
    const mapPin = "../assets/images/map-baloon.png";
    new google.maps.Marker({
      position: point,
      map: map,
      icon: mapPin,
      title: "TAGREE digital",
    });
  }
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".header").addClass("header-fixed");
  } else {
    $(".header").removeClass("header-fixed");
  }
});

document.querySelectorAll(".js-plus").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    ++item.parentElement.querySelector(".product-page__quantity-cnt input").value;

    if (item.parentElement.querySelector(".product-page__quantity-cnt input").value > 1) {
      item.parentElement.querySelector(".js-minus").classList.remove("min");
    }
  });
});

document.querySelectorAll(".js-minus").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    --item.parentElement.querySelector(".product-page__quantity-cnt input").value;

    if (item.parentElement.querySelector(".product-page__quantity-cnt input").value < 2) {
      item.parentElement.querySelector(".product-page__quantity-cnt input").value = 1;

      item.classList.add("min");
    }
  });
});
