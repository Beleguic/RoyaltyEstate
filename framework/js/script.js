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
})
