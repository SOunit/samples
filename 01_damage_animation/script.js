(() => {
  console.log('hello from js');

  // grab button element
  const damageButton = document.querySelector('.js-damage-button');
  console.log(damageButton);
  const damage = document.querySelector('.js-damage');

  // add event listener
  damageButton.addEventListener('click', () => {
    damage.classList.toggle('damage-animate');
  });
})();
