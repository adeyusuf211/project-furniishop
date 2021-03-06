fetch('/db.json')
    .then(response => response.json())
    .then(data => {
            let card = '';
            const productLinks = document.querySelector('.product-list');
            data.forEach(product => {
                card += `<a href="detail-produk.html" data-att="${ product.jenis }">
                            <div class="product">
                                <div class="product-image">
                                    <img src="${ product.gambar }" alt="">
                                    <button>${ product.jenis }</button>
                                </div>
                                <div class="product-text">
                                    <h1>${ product.judul }</h1>
                                    <h4>Rp. ${ product.harga.toLocaleString('ID', 3) }</h4>
                                </div>
                            </div>
                        </a>`;
                    });
                productLinks.innerHTML = card;
        });

const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    setTimeout(() => {
        nav.classList.toggle('sticky', scrollY > 500);
    }, 500);
});

const cart      = document.querySelectorAll('.cart-card');
const harga     = document.querySelectorAll('.cart-card .cart-card-total input');
const quantity  = document.querySelectorAll('.cart-card input');
const span      = document.querySelectorAll('.cart-card-total h6 span');
const removeBtn = document.querySelectorAll('.remove');

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

// Scirpt for modal auth
const auth      = document.querySelector('#auth');
const authModal = document.querySelector('.auth');
const authClose = document.querySelector('.auth .auth-text p');

auth.addEventListener('click', function() {
   authModal.classList.add('show');
});

authClose.addEventListener('click', function() {
    authModal.classList.remove('show');
});
// End modal auth script



const btnFilter = document.querySelectorAll('.products .product-categories .btn-categories');
const img       = document.querySelectorAll('.products .product-list a');

btnFilter.forEach(filter => {
      filter.addEventListener('click', () => {
          for(let i = 0; i < btnFilter.length; i++) {
              btnFilter[i].classList.remove('active');
          }
          filter.classList.add('active');

        // alert(filter.textContent);

          // show image
          img.forEach(show => {
              show.style.display = 'none';
              show.style.transition = 'all 0.5s linear';
              let productImg = filter.textContent.toLowerCase();
              if(show.getAttribute('data-att') === productImg) {
                  show.style.display = 'flex';
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


const count     = document.querySelector('#count p');
const cartBtn   = document.querySelector('#cart-btn');
const cartClose = document.querySelector('#cart-close');
const cartModal = document.querySelector('#cart-modal');
const modal     = document.querySelector('.modal');

cartModal.addEventListener('click', function() {
    modal.classList.add('show');
});

cartClose.addEventListener('click', function() {
    modal.classList.remove('show');
});

cartBtn.addEventListener('click', function() {
    let total = 0;
    total++;
    count.innerHTML = total;
    modal.style.display = "none";
});


const input     = document.querySelector('.modal-input');
const inputP    = document.querySelector('.modal-input input');
const priceP    = document.querySelector('.modal-price input');
const priceh3   = document.querySelector('.modal-price h3');

inputP.addEventListener('change', function() {
    const total = inputP.value * priceP.value;
    priceh3.innerHTML = `Rp. ${total.toLocaleString('ID')}`;
});


const modalVar  = document.querySelectorAll('.variant-list .card-image img');
const modalImg  = document.querySelector('.modal-image img');

modalVar.forEach(img => {
    img.addEventListener('click', function(e) {
        modalImg.src = e.target.src;
        img.style.border = "2px solid black";
    });
});





