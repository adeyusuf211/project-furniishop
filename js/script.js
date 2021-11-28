// const nav = document.querySelector('nav');

// window.addEventListener('scroll', function() {
//     setTimeout(() => {
//         nav.classList.toggle('sticky', scrollY > 500);
//     }, 500);
// });

const cart      = document.querySelectorAll('.cart-card');
const harga     = document.querySelectorAll('.cart-card .cart-card-total input');
const quantity  = document.querySelectorAll('.cart-card input');
const span      = document.querySelectorAll('.cart-card-total h6 span');


quantity.forEach(jumlah => {
    jumlah.addEventListener('change', function() {
        harga.forEach(h => {
            if(this.id === h.id) {
               const total = jumlah.value * h.value;
               span.forEach(s => {
                if(s.id == this.id) {
                    s.innerHTML = total.toLocaleString('iD', 3);
                }
               });
            }
        });
    });
});


const images    = document.querySelector('.product-image');
const image     = document.querySelectorAll('.cards-images .card-image');
const jumbo     = document.querySelector('.jumbo');

images.addEventListener('click', function(e) {
    if(e.target.className == 'p-img') {
        jumbo.src = e.target.src;
        setTimeout(() => {
            jumbo.classList.remove('fade');
        }, 500);
        jumbo.classList.add('fade');
    }
});

const search = document.getElementById('search');
const searchModal = document.querySelector('.searchModal');
const searchButton = document.querySelector('.searchModal .search .input button');

search.addEventListener('click', function() {
    searchModal.style.display = "grid";
    searchButton.addEventListener('click', function() {
        searchModal.style.display = "none";
    });
});



const count = document.querySelector('#count p');
const cartBtn = document.querySelector('#cart-btn');

let total = 0;
cartBtn.addEventListener('click', function() {
    total++;
    count.innerHTML = total;
});