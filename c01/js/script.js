let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18) {
    greeting = 'good evening';
} else if (hourNow > 12) {
    greeting = 'good afternoon';
} else if (hourNow > 0) {
    greeting = 'good morning';
} else {
    greeting = 'welcome';
}

document.write('<h3>'+greeting+'</h3>');
