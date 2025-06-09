document.getElementById("sellForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const imageInput = document.getElementById("image");
    const seller = localStorage.getItem("strange_trace_nick");

    const reader = new FileReader();
    reader.onload = function () {
        const imageData = reader.result;

        const item = {
            title,
            description,
            price,
            imageData,
            seller,
            timestamp: Date.now()
        };

        const existing = JSON.parse(localStorage.getItem("items") || "[]");
        existing.push(item);
        localStorage.setItem("items", JSON.stringify(existing));

        alert("Item posted!");
        document.getElementById("sellForm").reset();
        showPreview(item);
    };

    reader.readAsDataURL(imageInput.files[0]);
});

function showPreview(item) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${item.title}</h3>
        <img src="${item.imageData}" width="200" />
        <p>${item.description}</p>
        <p><strong>£${item.price.toFixed(2)}</strong> — Seller: ${item.seller}</p>
        <hr/>
    `;
    document.getElementById("previewArea").prepend(div);
}
