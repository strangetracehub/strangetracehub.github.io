document.addEventListener("DOMContentLoaded", function () {
    const itemsList = document.getElementById("itemsList");
    const items = JSON.parse(localStorage.getItem("items") || "[]").reverse();
    const currentNick = localStorage.getItem("strange_trace_nick");

    if (items.length === 0) {
        itemsList.innerHTML = "<p>No items available yet.</p>";
        return;
    }

    items.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.imageData}" width="200" />
            <p>${item.description}</p>
            <p><strong>£${item.price.toFixed(2)}</strong></p>
            <p>Seller: ${item.seller}</p>
            ${
                item.seller === currentNick
                    ? `<button onclick="deleteItem(${items.length - 1 - index})">Delete</button>`
                    : ""
            }
            <hr/>
        `;
        itemsList.appendChild(div);
    });
});

function deleteItem(indexToDelete) {
    if (confirm("Are you sure you want to delete this item?")) {
        const items = JSON.parse(localStorage.getItem("items") || "[]");
        items.splice(indexToDelete, 1);
        localStorage.setItem("items", JSON.stringify(items));
        location.reload();
    }
}
