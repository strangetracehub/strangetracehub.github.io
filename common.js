function generateRandomNickname() {
    const adjectives = ["Curious", "Silent", "Wild", "Odd", "Sweet", "Dirty", "Shy", "Crazy"];
    const nouns = ["Cat", "Fox", "Doll", "Angel", "Shadow", "Lover", "Muse", "Ghost"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 900 + 100); // 100–999
    return `${adjective}${noun}${number}`;
}

function getNickname() {
    if (!localStorage.getItem("nickname")) {
        localStorage.setItem("nickname", generateRandomNickname());
    }
    return localStorage.getItem("nickname");
}

document.addEventListener("DOMContentLoaded", () => {
    const nickElement = document.getElementById("nickname");
    if (nickElement) {
        nickElement.textContent = getNickname();
    }
});