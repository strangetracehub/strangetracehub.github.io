document.getElementById('sellForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nickname = localStorage.getItem("userNickname");
    const item = {
        seller: nickname,
        title: e.target.title.value,
        price: e.target.price.value,
        description: e.target.description.value,
        date: new Date().toISOString()
    };
    const listings = JSON.parse(localStorage.getItem("listings") || "[]");
    listings.push(item);
    localStorage.setItem("listings", JSON.stringify(listings));
    alert("Listing submitted!");
    e.target.reset();
});