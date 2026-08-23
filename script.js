document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.getElementById('shareBtn');
  
  shareBtn.addEventListener('click', async () => {
    // Cek apakah browser mendukung fitur share bawaan (Web Share API)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Link Toko Kami',
          text: 'Kunjungi link ini untuk melihat produk, sosial media, dan lokasi toko kami!',
          url: window.location.href // Mengambil URL website saat ini otomatis
        });
        console.log('Berhasil dibagikan');
      } catch (err) {
        console.error('Batal membagikan:', err);
      }
    } else {
      // Jika dibuka di browser PC lama yang tidak support
      alert('Salin link berikut untuk membagikan: ' + window.location.href);
    }
  });
});