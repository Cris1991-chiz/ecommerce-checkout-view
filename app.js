const cartNav = document.querySelector('.cart-nav-title');
const cartItems = document.querySelector('.incart-container');
const arrowBtn = document.getElementById('arrow-down');

cartNav.addEventListener('click', () => {
    
        cartItems.classList.toggle('active');
        arrowBtn.classList.toggle('arrow-up');
    
});

