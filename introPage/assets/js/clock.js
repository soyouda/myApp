function handleTime() {
    const target = document.querySelector(".clock h2");
    const date = new Date();

    target.innerText =
        `${
        date.getHours() < 10 ? `0${date.getHours()}`: date.getHours()} : ${
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()} : ${
        date.getSeconds() < 10 ? `0${date.getSeconds()}`: date.getSeconds()}`
}

function init() {
    handleTime();
    setInterval(handleTime, 1000);
}

init();