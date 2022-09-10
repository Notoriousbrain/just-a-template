const header = document.querySelector('.header');
onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top>=100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active');
    }
}
const circle = document.querySelectorAll('.section1 a');
onclick = function(){

circle.classList.add('sym1')
  console.log("Successful");
   
}
