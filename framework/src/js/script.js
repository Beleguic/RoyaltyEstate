$(document).ready(function(){
    //navbar mobile
    $('#account-button-burger, .close').on('click',function(){
        let account = document.getElementById('account')
        if (account.style.bottom === "0px"){
            account.style.bottom = "-100vh";
        } else {
            account.style.bottom = "0";
        }
    })
    document.getElementById('inscription').style.left = "100vw";
    document.getElementById('login').style.left = "0";
    $('#login-nav, #login-link').on('click',function(){
        document.getElementById('login').style.left = "0";
        document.getElementById('inscription').style.left = "100vw";
    })
    $('#inscription-link').on('click',function(){
        document.getElementById('login').style.left = "-100vw";
        document.getElementById('inscription').style.left = "0";
    })

    //navbar pc
    $('#login-nav').on('click',function(){
        let account = document.getElementById('account')
        if (account.style.top === "45px"){
            account.style.top = "-85vh";
        } else {
            account.style.top = "45px";
        }
    })
    //filter menu
    $('.dropdownMenuButton').on('click', function() {
        $(this).toggleClass('toggle');
    })
})

//google maps 
function initMap() {
    const selector = document.getElementById("map")
    const chateauChambord = { lat: 47.61718971319287, lng: 1.5176677496757647};  
    const options = {
      center: chateauChambord,
      zoom : 5,
    }
  
  const map = new google.maps.Map(selector, options);
  

  new google.maps.Marker({
    position: chateauChambord,
    map,
    title: "Chateau Chambord",
  });
}

// slider
var slides=document.querySelector(".slider-items").children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

