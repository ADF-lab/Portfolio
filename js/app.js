// tombol ke atas sidebar
var goUp = document.getElementsByClassName("sidebar")[0].getElementsByTagName("a")[0];

goUp.addEventListener('click', function(){
  window.scrollTo(0,0);
})