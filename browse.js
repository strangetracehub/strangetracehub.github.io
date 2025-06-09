document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("items-list");
    list.innerHTML = "<p>Loading items...</p>";
    setTimeout(() => {
        list.innerHTML = "<div><strong>Red Lace Set</strong><br>Used, 2 days<br><img src='https://placehold.co/200x200'></div>";
    }, 1000);
});