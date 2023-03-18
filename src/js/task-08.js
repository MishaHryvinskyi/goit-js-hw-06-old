const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const { email, password } = form.elements;

if (email.value === '' || password.value === '') {
    alert('All fields must be filled!');
    return;
    }

    const formData = { email: email.value, password: password.value };
    console.log(formData);

    form.reset();
});








