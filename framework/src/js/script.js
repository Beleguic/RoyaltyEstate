$(document).ready(function(){
    //navbar mobile
    let account = document.getElementById('account')
    let burgerMenu = document.getElementById('burger-menu-id')
    let search = document.getElementById('search-id')

    //close all
    $('.close').on('click',function(){
        burgerMenu.style.bottom = "-100vh";
        account.style.bottom = "-100vh";
        search.style.bottom = "-100vh";
    })

    //burger menu
    $('#burger-menu-button-burger').on('click',function(){
        if (burgerMenu.style.bottom === "0px"){
            burgerMenu.style.bottom = "-100vh";
        } else {
            burgerMenu.style.bottom = "0";
            account.style.bottom = "-100vh";
            search.style.bottom = "-100vh";
        }
    })

    //search 
    $('#search-button-burger').on('click',function(){
        if (search.style.bottom === "0px"){
            search.style.bottom = "-100vh";
        } else {
            search.style.bottom = "0";
            burgerMenu.style.bottom = "-100vh";
            account.style.bottom = "-100vh";
        }
    })

    //account
    $('#account-button-burger').on('click',function(){
        if (account.style.bottom === "0px"){
            account.style.bottom = "-100vh";
        } else {
            account.style.bottom = "0";
            burgerMenu.style.bottom = "-100vh";
            search.style.bottom = "-100vh";
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
    container.style.width = containerWidth + "px";
    carrousel.style.maxWidth = containerWidth/nbrImages + "px";
    //
    for(i = 1 ; i<= nbrImages ; i++){
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('./src/assets/images/chateaux/chateau-" + i + ".jpg')";
        container.appendChild(div);
    }
    displayBtnSlider();
}
rightBtn.onclick = function(){
    moveLeft();
}

leftBtn.onclick = function(){
    moveRight();
}

function displayBtnSlider(){
    if(position == -nbrImages+1)
    {
        rightBtn.style.visibility = "hidden";
    }
    else{
        rightBtn.style.visibility = "visible";
    }
    if(position == 0)
    {
        leftBtn.style.visibility = "hidden";
    }
    else{
        leftBtn.style.visibility = "visible";
    }
}
function moveLeft() {
    if (position > -nbrImages + 1) {
      position--;
    }
    container.style.transform = "translate(" + position * widthCarrousel + "px)";
    container.style.transition = "all 0.5s ease";
    displayBtnSlider();
}
  
function moveRight() {
    if (position < 0) {
      position++;
    }
    container.style.transform = "translate(" + position * widthCarrousel + "px)";
    container.style.transition = "all 0.5s ease";
    displayBtnSlider();
}
//swipe slider (mobile)
container.addEventListener("touchstart", startTouch);
container.addEventListener("touchmove", moveTouch);
container.addEventListener("touchend", endTouch);

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}
  
function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    let diffX = initialX - currentX;
    let diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // le déplacement est horizontal
        if (diffX > 0) {
        // swipe gauche
        moveLeft();
        } else {
        // swipe droit
        moveRight();
        }
    } else {
        // le déplacement est vertical, ne fait rien
        return;
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}
  
function endTouch(e) {
    initialX = null;
    initialY = null;
}
//
//resize the carousel 
window.addEventListener('resize', onResize);
function onResize() {
    largeurEcran = window.innerWidth;
    widthCarrousel = (largeurEcran * (90/100));

    containerWidth = (widthCarrousel * nbrImages);
    container.style.width = containerWidth + "px";
    carrousel.style.maxWidth = containerWidth/nbrImages + "px";

    var photos = document.querySelectorAll('.photo');

    for (var i = 0; i < photos.length; i++) {
    photos[i].style.width = containerWidth/nbrImages + "px"; 
    }
}