console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'teal') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = '#AF2655';
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = '#ED9153';
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = '#50D890';
    }
    
  });
});

