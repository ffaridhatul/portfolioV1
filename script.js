document.getElementById("recommendationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman refresh setelah submit

    // Mengambil nilai dari input form
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validasi input
    if (message === "") {
        alert("Please enter a recommendation message.");
        return;
    }

    // Membuat elemen baru untuk rekomendasi
    const recommendationCard = document.createElement("div");
    recommendationCard.classList.add("recommendation-card");

    const blockquote = document.createElement("blockquote");
    blockquote.textContent = `“${message}”`;

    // Menambahkan nama jika tersedia
    if (name) {
        const nameElement = document.createElement("p");
        nameElement.textContent = `- ${name}`;
        nameElement.style.fontWeight = "bold";
        nameElement.style.marginTop = "0.5rem"; // Menambahkan jarak antara pesan dan nama
        blockquote.appendChild(nameElement);
    }

    recommendationCard.appendChild(blockquote);

    // Menambahkan rekomendasi baru ke daftar rekomendasi di section yang sudah ada
    document.querySelector("#newRecommendations").appendChild(recommendationCard);

    // Menampilkan pop-up pesan berhasil
    alert("Recommendation successfully submitted!");

    // Reset form setelah submit
    document.getElementById("recommendationForm").reset();
});
