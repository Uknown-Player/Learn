
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
function createBubble() {
    // Buat elemen bubble (div)
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Tentukan posisi left agar hanya muncul di area pinggir kiri dan kanan
    const randomSide = Math.random() < 0.5 ? 'left' : 'right';
    if (randomSide === 'left') {
        bubble.style.left = Math.random() * 25 + 'vw'; // Area pinggir kiri (0% - 20%)
    } else {
        bubble.style.left = Math.random() * 20 + 70 + 'vw'; // Area pinggir kanan (80% - 100%)
    }

    // Buat elemen heart (i) di dalam bubble
    const heart = document.createElement('i');
    heart.innerHTML = '🤍';
    bubble.appendChild(heart);

    // Tambahkan bubble ke dalam body
    document.body.appendChild(bubble);

    // Hapus bubble setelah animasi selesai
    setTimeout(() => {
        bubble.remove();
    }, 5000); // Hapus setelah 5 detik
}




// Munculkan bubble baru setiap 0.5 detik
setInterval(createBubble, 550);

