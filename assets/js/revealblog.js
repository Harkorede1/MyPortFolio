'use strict';

const openBtn = document.querySelector('.blog_box');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', openModal);

function openModal() {
  modal.style.display = 'grid';
}
