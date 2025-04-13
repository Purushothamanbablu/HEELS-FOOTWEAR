function result(showId, hideId) {
    let showElement = document.getElementById(showId);
    let hideElement = document.getElementById(hideId);

    showElement.style.display = "block";
    hideElement.style.display = "none";
}

document.getElementById("showlog").addEventListener('click', () => {
    result("log", "sign");
});

document.getElementById("signup").addEventListener('click', () => {
    result("sign", "log");
});