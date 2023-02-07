$(document).ready(function() {
    let title = this.querySelectorAll('.secondaryTitle');
    title.forEach(element => {
        let width = element.offsetWidth;
        console.log(width);
        //$(element>'.line').width(width);
        element.querySelector('.line').style.width = element.offsetWidth;
    });
});


