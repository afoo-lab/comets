$('.toggle').click(

	function() {
		$('nav').toggleClass('open');
	})

$(document).ready(function(){

      $('.slider').bxSlider({

      	mode: 'fade',
      	speed: 300

      });

    });

let menutoggle = document.querySelector('.toggle');
menutoggle.onclick = function () {
	menutoggle.classList.toggle('active')
}

const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
	if(window.pageYOffset > 100) {
		toTop.classList.add('active');
	}

	else {
		toTop.classList.remove('active');
	}
})

