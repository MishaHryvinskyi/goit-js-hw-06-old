const input = document.querySelector('#validation-input');
  input.addEventListener('blur', () => {
    const validLength = input.getAttribute('data-length');
    const currentLength = input.value.length;

    input.classList.remove(`valid`, `invalid`);
    input.classList.add(currentLength === +validLength ? `valid` : `invalid`);

  });