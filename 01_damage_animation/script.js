(() => {
  console.log('hello from js');

  // grab button element
  const damageButton = document.querySelector('.js-damage-button');
  console.log(damageButton);

  // add event listener
  damageButton.addEventListener('click', () => {
    console.log('damage button click');
  });
})();
