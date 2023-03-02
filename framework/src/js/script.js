$(document).ready(function(){
    //navbar mobile
    let account = document.getElementById('account')
    let burgerMenu = document.getElementById('burger-menu-id')

    //close all
    $('.close').on('click',function(){
        if (burgerMenu.style.bottom === "0px"){
            burgerMenu.style.bottom = "-100vh";
        }
        if (account.style.bottom === "0px"){
            account.style.bottom = "-100vh";
        }
    })

    //burger menu
    $('#burger-menu-button-burger').on('click',function(){
        if (burgerMenu.style.bottom === "0px"){
            burgerMenu.style.bottom = "-100vh";
        } else {
            burgerMenu.style.bottom = "0";
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
    container = document.getElementById("container");
    leftBtn = document.getElementById("leftBtn");
    rightBtn = document.getElementById("rightBtn");
    container.style.width = (800 * nbrImages) + "px";

    for(i = 1 ; i<= nbrImages ; i++){
        div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('./src/assets/images/chateau-" + i + ".jpg')";
        container.appendChild(div);
    }
    displayBtnSlider();
}
rightBtn.onclick = function(){
    if(position > -nbrImages+1){
        position--;
    }
    container.style.transform= "translate("+ position * 800 + "px)";
    container.style.transition = "all 0.5s ease";
    displayBtnSlider();
}

leftBtn.onclick = function(){
    if(position < 0){
        position++;
    }
    container.style.transform= "translate("+ position * 800 + "px)";
    container.style.transition = "all 0.5s ease";
    displayBtnSlider();
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
//