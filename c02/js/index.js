var count = 0;
var countEl = document.getElementById('p');
var saveEl = document.getElementById('save-el');

function counter() {
    count++
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = count;
}

function save() {
    var countStr = count + ' - ';
    saveEl.innerText += countStr;
}