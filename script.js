$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass('sticky');
        }
        else{
            $(".navbar").removeClass('sticky');
        }
    })

    // toggle menu/nav bar script
    $('.menu-btn').click(function(){
        $(".navbar .menu").toggleClass("active");
    })

    // typing animation script 

    var typed =new Typed(".typing",{
        strings: ["Gamer","Programmer","Software Developer","Cricketer","Creator","Video Editer","Writer","Movies Review"],
        typeSpeed:100,
        backSpeed: 50,
        loop: true
    })

    var typed =new Typed(".typing-2",{
        strings: ["Gamer","Programmer","Software Developer","Cricketer","Creator","Video Editer","Writer","Movies Review"],
        typeSpeed:100,
        backSpeed: 50,
        loop: true
    })
})

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}
