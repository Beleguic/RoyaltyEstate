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
    document.body.addEventListener('click', function(e) {
        if(!e.target.classList.contains("dropdownButton")) {
            console.log("haha");
            console.log(e.target);
            $('.dropdownButton').removeClass("toggle");
        }
        if(e.target.classList.contains("dropdownButton")) {
            toggleDropdownList(e.target);
        }
    });
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

// dropdown
function toggleDropdownList (button) {
    document.querySelectorAll(".dropdownList").forEach(function(ul) {
        console.log("sibling");
        console.log(button.nextElementSibling);
        if(ul.id == button.nextElementSibling.id) {
            console.log("bingo")
            console.log(ul)
            button.classList.toggle("toggle");
        }
        else {
            console.log("bozo")
            console.log(ul.id)
            ul.previousElementSibling.classList.remove("toggle");
        }
    });
}

//New slider

document.body.onload=function(){
    nbrImages = 3;
    position = 0;
    carrousel = document.getElementById("carrousel");
    container = document.getElementById("container");
    leftBtn = document.getElementById("leftBtn");
    rightBtn = document.getElementById("rightBtn");
    //swipe avec le slider 
    initialX = null;
    initialY = null;

    //calculer la bonne largeur pour le carrousel 
    largeurEcran = window.innerWidth;
    widthCarrousel = (largeurEcran * (90/100));

    containerWidth = (widthCarrousel * nbrImages);
    heightImages = (containerWidth/nbrImages) * 0.6
    container.style.width = containerWidth + "px";
    carrousel.style.maxWidth = containerWidth/nbrImages + "px";
    //
    for(i = 1 ; i<= nbrImages ; i++){
        div = document.createElement("div");
        div.className = "photo";
        div.style.width = containerWidth/nbrImages + "px";
        div.style.height = heightImages+"px";
        div.style.backgroundImage = "url('./src/assets/images/chateaux/chateau-" + i + ".jpg')";
        container.appendChild(div);
    }
    displayBtnSlider();
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

