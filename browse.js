document.addEventListener("DOMContentLoaded", function () {
    const itemsList = document.getElementById("itemsList");
    const items = JSON.parse(localStorage.getItem("items") || "[]").reverse();
    const currentNick = localStorage.getItem("strange_trace_nick");
    const unlockedItems = JSON.parse(localStorage.getItem("unlocked_previews") || "[]");

    if (items.length === 0) {
        itemsList.innerHTML = "<p>No items available yet.</p>";
        return;
    }

    items.forEach((item, index) => {
        const realIndex = items.length - 1 - index;
        const isUnlocked = unlockedItems.includes(realIndex);

        const div = document.createElement("div");
        div.innerHTML = \`
            <h3>\${item.title}</h3>
            <img src="\${isUnlocked ? item.imageFull : item.imageBlurred}" width="200" />
            <p><strong>£\${item.price.toFixed(2)}</strong></p>
            <p>Seller: \${item.seller}</p>
            \${item.seller === currentNick
                ? '<button onclick="deleteItem(' + realIndex + ')">Delete</button>'
                : !isUnlocked
                    ? '<button onclick="unlockPreview(' + realIndex + ')">Unlock preview – £1</button>'
                    : '<button onclick="buyItem(' + realIndex + ', ' + item.price + ')">Pay £' + item.price.toFixed(2) + ' for access & delivery</button>'
            }
            <hr/>
        \`;
        itemsList.appendChild(div);
    });
});

function unlockPreview(index) {
    alert("By proceeding, you agree to receive access to digital content and delivery terms. All sales are final and non-refundable.");
    const unlocked = JSON.parse(localStorage.getItem("unlocked_previews") || "[]");
    unlocked.push(index);
    localStorage.setItem("unlocked_previews", JSON.stringify(unlocked));
    location.reload();
}

function buyItem(index, price) {
    alert("Thank you for your payment of £" + price.toFixed(2) + ". Delivery info will be shared with the seller.");
}

function deleteItem(indexToDelete) {
    if (confirm("Are you sure you want to delete this item?")) {
        const items = JSON.parse(localStorage.getItem("items") || "[]");
        items.splice(indexToDelete, 1);
        localStorage.setItem("items", JSON.stringify(items));
        location.reload();
    }
}
