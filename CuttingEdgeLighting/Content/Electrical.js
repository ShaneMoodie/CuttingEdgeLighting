var jsOverview = document.getElementById('overview');
var jsCovArea = document.getElementById('coverageArea');
var jsQuote = document.getElementById('quote');

function changeTextOverviewElec() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'block';
}

function changeTextCoverage() {
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'none';
    jsCovArea.style.display = 'block';
}

function changeTextQuote() {
    jsCovArea.style.display = 'none';
    jsOverview.style.display = 'none';
    jsQuote.style.display = 'block';
}