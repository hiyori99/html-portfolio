'use strict';

{
  const open = document.getElementById('open2');
  const close = document.getElementById('close2');
  const modal = document.getElementById('modal2');
  const mask = document.getElementById('mask2');

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
{
  const open = document.getElementById('open4');
  const close = document.getElementById('close4');
  const modal = document.getElementById('modal4');
  const mask = document.getElementById('mask4');

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