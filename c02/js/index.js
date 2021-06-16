var count = 0;

function counter() {
    count++
    document.getElementById('p').innerText = count;
}

function reset() {
    count = 0;
    document.getElementById('p').innerHTML = count;
}