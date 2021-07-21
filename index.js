document.getElementById("h3").style.color = "rgb(55, 156, 97)";
document.getElementById("3").style.color = "white";
document.getElementById("h").style.color = "rgb(55, 156, 97)";
//document.getElementById("nav").style.color = "green";
document.a.style.color = "rgb(55, 156, 97)";
document.getElementById("contact").style.backgroundColor="rgb(55, 156, 97)"
//document.getElementById("twitter").style.color="white"
document.getElementById("git").style.color="white"
document.getElementById("email").style.color="white"
document.getElementById("dribble").style.color="white"

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
