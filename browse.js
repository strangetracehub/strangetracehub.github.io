window.onload = function () {
    const listings = JSON.parse(localStorage.getItem("listings") || "[]");
    const container = document.getElementById("listings");
    if (listings.length === 0) {
        container.innerHTML = "<p>No listings yet.</p>";
        return;
    }
    listings.forEach(item => {
        const div = document.createElement("div");
        div.className = "listing";
        div.innerHTML = `<h3>${item.title}</h3>
                         <p><strong>By:</strong> ${item.seller}</p>
                         <p>${item.description}</p>
                         <p><strong>£${item.price}</strong></p>`;
        container.appendChild(div);
    });
};