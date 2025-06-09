document.addEventListener("DOMContentLoaded", function () {
    const itemsList = document.getElementById("itemsList");
    const items = JSON.parse(localStorage.getItem("items") || "[]").reverse();

    if (items.length === 0) {
        itemsList.innerHTML = "<p>No items available yet.</p>";
        return;
    }

    items.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.imageData}" width="200" />
            <p>${item.description}</p>
            <p><strong>£${item.price.toFixed(2)}</strong></p>
            <p>Seller: ${item.seller}</p>
            <button onclick="buyItem('${item.seller}', '${item.title}')">Buy via Telegram</button>
            <hr/>
        `;
        itemsList.appendChild(div);
    });
});

function buyItem(seller, title) {
    const message = encodeURIComponent(`Hi, I'm interested in your item: "${title}" listed by ${seller}`);
    window.open(`https://t.me/share/url?url=&text=${message}`, "_blank");
}
