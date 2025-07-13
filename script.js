document.addEventListener('DOMContentLoaded', function() {
    
    // Fungsi untuk menampilkan tanggal hari ini dalam format Bahasa Indonesia
    function tampilkanTanggal() {
        const targetElement = document.getElementById('tanggal-hari-ini');
        if (!targetElement) return;

        const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const bulan = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const sekarang = new Date();
        const namaHari = hari[sekarang.getDay()];
        const tanggal = sekarang.getDate();
        const namaBulan = bulan[sekarang.getMonth()];
        const tahun = sekarang.getFullYear();

        targetElement.textContent = `${namaHari}, ${tanggal} ${namaBulan} ${tahun}`;
    }

    tampilkanTanggal();

});