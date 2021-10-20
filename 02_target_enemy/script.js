(() => {
  const targetBox1 = document.querySelector('.js-target-box-1');
  console.log(targetBox1);

  const target1 = document.querySelector('.js-target-1');
  console.log(target1);

  targetBox1.addEventListener('click', () => {
    target1.classList.toggle('target-on');
  });

  // target box 2
  const targetBox2 = document.querySelector('.js-target-box-2');
  console.log(targetBox2);

  const target2 = document.querySelector('.js-target-2');
  console.log(target2);

  targetBox2.addEventListener('click', () => {
    target2.classList.toggle('target-on');
  });
})();
