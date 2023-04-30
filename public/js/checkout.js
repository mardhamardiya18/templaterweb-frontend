const buttons = document.querySelectorAll('.tabBtn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // remove active class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove('active');
    });
    
    // add active class to clicked button
    button.classList.add('active');
  });
});

var input = document.querySelector('#diskon');


input.addEventListener('keyup', function() {
  this.value = this.value.toUpperCase();
});



