$(document).ready(function(){
    //navbar mobile
    let account = document.getElementById('account')
    let burgerMenu = document.getElementById('burger-menu-id')
    let search = document.getElementById('search-id')
    let rdv = document.getElementById('rdv')

    //close all
    $('.close').on('click',function(){
        burgerMenu.style.bottom = "-100vh";
        account.style.bottom = "-100vh";
        search.style.bottom = "-100vh";
        rdv.style.bottom = "-100vh";
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

    //rdv
    $('#rdv-id').on('click',function(){
        if (rdv.style.bottom === "0px"){
            rdv.style.bottom = "-100vh";
        } else {
            rdv.style.bottom = "0";
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
    $('#btnConnect').on('click',function(){
        document.getElementById('Connect-ConfirmedText').style.visibility = "visible";
    })
    $('#btnInscr').on('click',function(){
        document.getElementById('Inscr-ConfirmedText').style.visibility = "visible";
    })
    //navbar pc
    //login
    $('#login-nav').on('click',function(){
        if (account.style.top === "45px"){
            account.style.top = "-85vh";
        } else {
            account.style.top = "45px";
            search.style.top = "-85vh";
            rdv.style.top = "-85vh";
        }
    })
    //search
    $('#search-nav').on('click',function(){
        if (search.style.top === "45px"){
            search.style.top = "-85vh";
        } else {
            search.style.top = "45px";
            account.style.top = "-85vh";
            rdv.style.top = "-85vh";
        }
    })
    //rdv
    $('#rdv-id').on('click',function(){
        if (rdv.style.top === "45px"){
            rdv.style.top = "-85vh";
        } else {
            rdv.style.top = "45px";
            account.style.top = "-85vh";
            search.style.top = "-85vh";
        }
    })

    //dropdown menu
    document.body.addEventListener('click', function(e) {
        if(!e.target.classList.contains("dropdownButton")) {
            $('.dropdownButton').removeClass("toggle");
        }
        if(e.target.classList.contains("dropdownButton")) {
            toggleDropdownList(e.target);
        }
    });
    $('.container-scroll').scroll(function() {
        let st = $('.container-scroll').scrollTop();
        if(st > 100) {
            $('.imageNosBiens > #dropdownMenu').css("display", "none");
        }
        else {
            $('.imageNosBiens > #dropdownMenu').css("display", "flex");
        }
    });
    // parallax & scrolling
    if(window.matchMedia("(min-width:1020px)").matches) {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if(scroll > 100) {
                $('.banner-img').css("background-size","110%");
                $('.banner-img').css("opacity","0.5");

            }
            else {
                $('.banner-img').css("background-size","100%");
                $('.banner-img').css("opacity","100%");
            }
        });
    }
    else {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if(scroll > 200) {
                $('.banner-img').css("background-size","auto 110%");
                $('.banner-img').css("opacity","0.5");

            }
            else {
                $('.banner-img').css("background-size","auto 100%");
                $('.banner-img').css("opacity","100%");
            }
        });
    }
})

//google maps 
function initMap() {
    //get latitude and longitude
    if (typeof window.latidudeMap !== "undefined" && typeof window.longitudeMap !== "undefined") {
        //la variable existe
        latidudeMap = window.latidudeMap;
        longitudeMap = window.longitudeMap;
    } else {
        // La variable n'existe pas
        latidudeMap = 47.61718971319287;
        longitudeMap = 1.5176677496757647;
    }
    const selector = document.getElementById("map")
    const chateauChambord = { lat: latidudeMap, lng: longitudeMap};  
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
        if(ul.id == button.nextElementSibling.id) {
            button.classList.toggle("toggle");
        }
        else {
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

    //get the size of the slider 
    if (typeof window.LargeurSliderEnPourcentage !== "undefined") {
        //la variable existe
        largeurSlider = window.LargeurSliderEnPourcentage;
    } else {
        // La variable n'existe pas
        largeurSlider = 100;
    }
    //retrieve the path of the slider images 
    if (typeof window.PathImageSlider !== "undefined") {
        //la variable existe
        PathImages = window.PathImageSlider;
    } else {
        // La variable n'existe pas
        PathImages = "./src/assets/images/chateaux/chateau-nouveaut??-";
    }
    
    //variable for swipe avec le slider 
    initialX = null;
    initialY = null;

    //Pour adapter la taille du carousel il faut jouer les variable en dessous plus particulierement (widthCarrousel pour la largeur , heightImages(ratio) pour la hauteur ) et ne pas oublier d'adapter la fonction onResize() tout en bas 
    //calculer la bonne largeur pour le carrousel 
    largeurEcran = window.innerWidth;
    widthCarrousel = (largeurEcran * (largeurSlider/100)); //--> defini la largeur final du carousel en fonction de la largeur de l'ecran ici on prend 60% de la taille de l'ecran 

    containerWidth = (widthCarrousel * nbrImages); //defini la largeur total du container, celui ci contiens les x images en inline block et donc doit prendre une largeur de x fois la largeur du carrousel 
    widthImages = containerWidth/nbrImages; // defini la largeur d'une image
    heightImages = widthImages * 0.6 // defini la hauteur des images puis du container et du carousel en cascade car on defini pas la hauteur carousel et container ; ici on prend la largeur d'une image puis on apllique un ratio
    container.style.width = containerWidth + "px";
    carrousel.style.maxWidth = containerWidth/nbrImages + "px";
    //
    for(i = 1 ; i<= nbrImages ; i++){
        div = document.createElement("div");
        div.className = "photo";
        div.style.width = widthImages + "px";
        div.style.height = heightImages+"px";
        div.style.backgroundImage = "url('"+ PathImages + i + ".jpg')";

        caption = document.createElement("div");
        caption.className = "sliderCaption";
        caption.innerHTML = '<div class="secondaryTitle"><h2><a href="./page_du_bien.html">Ch??teau ' + i + '</a></h2></div><h3>-     </h3>';
        div.appendChild(caption);
        container.appendChild(div);

        
    }
    displayBtnSlider();
}
//functions for slider
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
    container.style.transform = "translateX(" + position * widthCarrousel + "px)";
    container.style.transition = "all 0.5s ease";
    displayBtnSlider();
}
  
function moveRight() {
    if (position < 0) {
      position++;
    }
    container.style.transform = "translateX(" + position * widthCarrousel + "px)";
    container.style.transition = "all 0.5s ease";
    displayBtnSlider();
}

    //swipe for mobile :
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
            // le d??placement est horizontal
            if (diffX > 0) {
            // swipe gauche
            moveLeft();
            } else {
            // swipe droit
            moveRight();
            }
        } else {
            // le d??placement est vertical, ne fait rien
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
        widthCarrousel = (largeurEcran * (100/100));

        containerWidth = (widthCarrousel * nbrImages);
        heightImages = (containerWidth/nbrImages) * 0.6;
        widthImages = containerWidth/nbrImages;
        container.style.width = containerWidth + "px";
        carrousel.style.maxWidth = widthImages + "px";

        var photos = document.querySelectorAll('.photo');

        for (var i = 0; i < photos.length; i++) {
        photos[i].style.width = widthImages + "px"; 
        photos[i].style.height = heightImages+"px";
        }
    }
    //
//

//event for slider 
rightBtn.onclick = function(){
    moveLeft();
}

leftBtn.onclick = function(){
    moveRight();
}

    //swipe slider (mobile)
container.addEventListener("touchstart", startTouch);
container.addEventListener("touchmove", moveTouch);
container.addEventListener("touchend", endTouch);
    //
//


