const modal = document.getElementById('profile-modal');
const btn = document.querySelector('.profile-img');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
