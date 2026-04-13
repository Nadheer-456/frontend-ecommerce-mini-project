  /* Size selector */
  function selectSize(el) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }

  /* Accordion  */
  function toggleAcc(head) {
    head.parentElement.classList.toggle('open');
  }

  /* ── Wishlist toggle ── */
  function toggleWish(btn) {
    btn.classList.toggle('liked');
    btn.textContent = btn.classList.contains('liked') ? '♥' : '♡';
  }

  /* Add to Cart */
  function addToCart(btn) {
    const txt = document.getElementById('cartText');
    const ico = document.getElementById('cartIcon');
    txt.textContent = 'ADDED!';
    ico.textContent = '✓';
    btn.style.background = '#3B6D11';
    setTimeout(() => {
      txt.textContent = 'ADD TO CART';
      ico.textContent = '🛍';
      btn.style.background = '';
    }, 2000);
  }

  //selectingg the menu-bar
const menubar = document.querySelector(".menu");

//opening the menu bar
function openmenu() {
  menubar.classList.add("is-open")
}

//close the menu bar
function closemenu() {
  menubar.classList.remove("is-open");
}