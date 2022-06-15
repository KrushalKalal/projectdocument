var current_location = document.getElementById("location_name");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    current_location.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(data) {
  let latitude = data.coords.latitude;
  let longitude = data.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
  fetch(url,{method:'GET'})
  .then((res) => res.json())
  .then((data) => {
      console.log(data)
      let cityName = data.city.name
      let temp = data.list[0].temp.day
      current_location.innerText = `${cityName} ${temp}°C`
  })
}




function loadCoupon (){
    document.getElementById('coupon').style.visibility = 'visible'
}

function closeCoupon (){
    document.getElementById('coupon').style.visibility = 'hidden'
}





function change_theme(){
  let theme = document.body;
  theme.classList.toggle("dark_theme");
  theme.classList.toggle("dark_listing_theme");
  var mode;
  if(theme.classList.contains("dark_theme")){
    mode = "DARK";
  }else{
    mode = "LIGHT";
  }

  localStorage.setItem("pageTheme", JSON.stringify(mode))
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

if(getTheme === "DARK"){
  document.body.classList = "dark_theme dark_listing_theme"
}




$(document).ready(function(){
    $(".img-carousel").owlCarousel({
      margin:10,
      loop:false,
      nav:true,
      dots:false,
      navText:[ "<i class='fa fa-caret-left'></i>",
                "<i class='fa fa-caret-right'></i>"],
      autoplay: true,
      autoplayHoverPause: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:4
        },
        1200:{
            items:4
        }
      },

    });
   });

   $(document).ready(function(){
    $(".offer-carousel").owlCarousel({
      margin:10,
      loop:false,
      nav:true,
      dots:false,
      navText:[ "<i class='fa fa-caret-left'></i>",
                "<i class='fa fa-caret-right'></i>"],
      autoplay: true,
      autoplayHoverPause: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:3
        },
        1000:{
          items:4
        },
        1200:{
            items:4
        }
      },

    });
   });