const container = document.getElementById('container');
const inscreverBtn = document.getElementById('inscrever');
const loginBtn = document.getElementById('login');

inscreverBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});