const items = document.querySelector('.items');
const toggleBtn = document.querySelector('.toggleBtn');

toggleBtn.addEventListener('click', function show(){
    toggleBtn.classList.toggle("change");
    items.classList.toggle("active");
})