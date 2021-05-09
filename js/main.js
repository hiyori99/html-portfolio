'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const menu1 = document.getElementById('menu1');
  const menu2 = document.getElementById('menu2');
  const menu3 = document.getElementById('menu3');
  const menu4 = document.getElementById('menu4');
  const menu5 = document.getElementById('menu5');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu1.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
 
  menu2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
 
  menu3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
 
  menu4.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
 
  menu5.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
 
}

{
  const open1 = document.getElementById('product-open1');
  const close1 = document.getElementById('close1');
  const modal1 = document.getElementById('modal1');
  const mask1 = document.getElementById('mask1');

  open1.addEventListener('click', () => {
    modal1.classList.remove('hidden1');
    mask1.classList.remove('hidden1');
  });

  close1.addEventListener('click', () => {
    modal1.classList.add('hidden1');
    mask1.classList.add('hidden1');
  });

  mask1.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}

{
  const open2 = document.getElementById('product-open2');
  const close2 = document.getElementById('close2');
  const modal2 = document.getElementById('modal2');
  const mask2 = document.getElementById('mask2');

  open2.addEventListener('click', () => {
    modal2.classList.remove('hidden2');
    mask2.classList.remove('hidden2');
  });

  close2.addEventListener('click', () => {
    modal2.classList.add('hidden2');
    mask2.classList.add('hidden2');
  });

  mask2.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}

{
  const open3 = document.getElementById('product-open3');
  const close3 = document.getElementById('close3');
  const modal3 = document.getElementById('modal3');
  const mask3 = document.getElementById('mask3');

  open3.addEventListener('click', () => {
    modal3.classList.remove('hidden3');
    mask3.classList.remove('hidden3');
  });

  close3.addEventListener('click', () => {
    modal3.classList.add('hidden3');
    mask3.classList.add('hidden3');
  });

  mask3.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}
{
  const copen = document.getElementById('contact-open');
  const cclose = document.getElementById('contact-close');
  const cmodal = document.getElementById('contact-modal');
  const cmask = document.getElementById('contact-mask');

  copen.addEventListener('click', () => {
    cmodal.classList.remove('hidden');
    cmask.classList.remove('hidden');
  });

  cclose.addEventListener('click', () => {
    cmodal.classList.add('hidden');
    cmask.classList.add('hidden');
  });

  cmask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}
