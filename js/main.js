'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close.click();
  });
}

// $(function(){
// 	var scrollPosition;
// 	$(".modal").on("click", function() {
// 		scrollPosition = $(window).scrollTop();
// 		$('body').addClass('fixed').css({'top': -scrollPosition});
// 	});
// 	$("#Close").on("click", function() {
// 		$('body').removeClass('fixed').css({'top': 0});
// 		window.scrollTo( 0 , scrollPosition );
// 	});
// });