document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');

    console.log('click');
  };

  //   const SENSITIVITY = 10;
  //   const COOKIE_NAME = 'exit-popup';

  //   const modalEle = document.getElementById('modal');
  //   const modalOverlay = document.getElementById('modal-overlay');
  //   const closeButton = document.getElementById('closeButton');

  //   const hasModalShown = () => {
  //     const cookie = `; ${document.cookie}`
  //       .split(`; ${COOKIE_NAME}=`)
  //       .pop()
  //       .split(';')
  //       .shift();
  //     return cookie === 'true';
  //   };

  //   const markModalShown = () => {
  //     const date = new Date();
  //     date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
  //     document.cookie = `COOKIE_NAME=true; expires=${date.toUTCString()}`;
  //   };

  //   const closeModal = () => {
  //     modalEle.classList.remove('modal--visible');
  //     modalEle.classList.add('modal--hidden');

  //     modalOverlay.classList.remove('modal--visible');
  //     modalOverlay.classList.add('modal--hidden');
  //   };

  //   const handleMouseLeave = (e) => {
  //     if (e.clientY < SENSITIVITY && !hasModalShown()) {
  //       document.removeEventListener('mouseleave', handleMouseLeave);

  //       // Show the modal
  //       modalEle.classList.remove('modal--hidden');
  //       modalEle.classList.add('modal--visible');

  //       modalOverlay.classList.remove('modal--hidden');
  //       modalOverlay.classList.add('modal--visible');

  //       // markModalShown();
  //     }
  //   };

  //   document.addEventListener('mouseleave', handleMouseLeave);
  //   closeButton.addEventListener('click', closeModal);
});
