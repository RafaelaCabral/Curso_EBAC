const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.sucess-message');

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    if (valorB > valorA) {
        successMessage.innerHTML = `O valor do campo B (${valorB}) é maior que o valor do campo A (${valorA}).`;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        campoA.value = '';
        campoB.value = '';
    } else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});
