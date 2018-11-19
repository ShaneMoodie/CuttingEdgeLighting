var jsOverview = document.getElementById('overview');
var jsQuote = document.getElementById('quote');

function changeTextQuote() {
    if (jsOverview.style.display === 'none') {
        jsOverview.style.display = 'block';
        jsQuote.style.display = 'none';
    }
    else {
        jsOverview.style.display = 'none';
        jsQuote.style.display = 'block';
    }
}