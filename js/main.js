import {header,footer, sidebarComponent, 
        firstsectionhome, secondsectionhome, project,
        homeSection, detailProject} from './components.js'
        
        
var dataproject = [
  {
    id: 3,
    title: 'foodnewsnetwork',
    description: 'online media website that contains all kinds of food. this website focuses on creating interesting food articles, as well as interesting video videos containing food',
    scope: `ui/ux designer,system analyst,database architect,fullstack developer`,
    summary:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    tech: 'Laravel, tailwindcss, livewire',
    date: 'august - september 2021',
    url: 'https://foodnewsnetwork.id/'
  },
  {
    id: 2,
    title: 'puslahta KONI Cimahi',
    description: 'a website that aims to make it easier for local government sports agencies to process member data',
    scope: `ui/ux designer,system analyst,database architect,fullstack developer`,
    summary:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    tech: 'Laravel, tailwindcss, livewire',
    date: 'may - august 2021',
    url: 'http://puslahta-konicimahi.org/'	
  },
  {
    id: 1,
    title: 'insta-STM',
    description: 'a social media website for internal staff and student in SMKN 1 Cimahi. This website is a necessity for my graduation',
    scope: `ui/ux designer,system analyst,database architect,fullstack developer`,
    summary:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    tech: 'Laravel, jetstream, tailwindcss',
    date: 'dec 2020 - march 2021',
    url: ''	
  },
]

const vm = new Vue({
  el:"#app",
  components:{
    'header-component' : header,
    'footer-component' : footer,
    'sidebar-component' : sidebarComponent,
    'home-section' : homeSection,
  },
  data(){
    return{
      data: dataproject,
    }
  },
})


// tombol ke atas sidebar
var goUp = document.getElementsByClassName("sidebar")[0].getElementsByTagName("a")[0];

goUp.addEventListener('click', function(){
  window.scrollTo(0,0);
})

document.addEventListener('DOMContentLoaded', function () {
  const ele = document.getElementById('container');
  ele.style.cursor = 'grab';

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener('mousedown', mouseDownHandler);
});