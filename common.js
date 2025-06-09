
function generateNickname() {
    const adjectives = ["Panty", "Naughty", "Sassy", "Shy", "Wild", "Secret", "Dirty", "Cute"];
    const animals = ["Fox", "Kitten", "Bunny", "Doll", "Angel", "Tiger", "Cat", "Fairy"];
    const number = Math.floor(Math.random() * 1000);
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return adj + animal + number;
}

function getOrCreateNickname() {
    let nickname = localStorage.getItem("strange_trace_nick");
    if (!nickname) {
        nickname = generateNickname();
        localStorage.setItem("strange_trace_nick", nickname);
    }
    return nickname;
}

function showHeader() {
    const nick = getOrCreateNickname();

    const header = document.createElement("div");
    header.className = "fixed-header";
    header.innerHTML = \`
        <div>
            <a href="index.html">Home</a>
            <a href="browse.html">Browse</a>
            <a href="sell.html">Sell</a>
        </div>
        <div>Your seller name: <strong>\${nick}</strong></div>
    \`;

    document.body.prepend(header);
}

document.addEventListener("DOMContentLoaded", showHeader);
