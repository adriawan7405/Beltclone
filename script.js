document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Terima kasih, pesan Anda sudah terkirim!');
  e.target.reset();
});
