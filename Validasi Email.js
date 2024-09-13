// Validasi Formulir Kontak
document.getElementById('contact-form').addEventListener('submit', function (e) {
e.preventDefault(); // Mencegah pengiriman formulir default

// Ambil nilai dari input
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var message = document.getElementById('message').value;

// Validasi sederhana
if (name === '' || email === '' || message === '') {
    alert('Semua kolom wajib diisi!');
    return;
}

if (!validateEmail(email)) {
    alert('Email tidak valid!');
    return;
}

// Jika validasi sukses, tampilkan pesan berhasil (atau kirim data ke server)
alert('Pesan berhasil dikirim!');

// Reset form setelah berhasil
document.getElementById('contact-form').reset();
});

// Fungsi Validasi Email
function validateEmail(email) {
var re = /^[^\s@]+@[^

    // Menyembunyikan Animasi Loading Setelah Halaman Selesai Dimuat
window.addEventListener('load', function() {
document.getElementById('loading').style.display = 'none';
});   
