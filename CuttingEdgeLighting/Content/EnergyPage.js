var jsOverview = document.getElementById('overview');
var jsEms = document.getElementById('ems?');
var jsCount = document.getElementById('count');
var jsCovArea = document.getElementById('coverageArea');
var jsQuote = document.getElementById('quote');

function changeTextOverviewEnergy() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'block';
    jsEms.style.display = 'none';
    jsCount.style.display = 'none';
}
function changeTextEMS() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'none';
    jsEms.style.display = 'block';
    jsCount.style.display = 'none';
}

function changeTextCount() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'none';
    jsEms.style.display = 'none';
    jsCount.style.display = 'block';
} 

function changeTextCoverage() {
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'none';
    jsCovArea.style.display = 'block';
    jsEms.style.display = 'none';
    jsCount.style.display = 'none';
}

function changeTextQuote() {
    jsCovArea.style.display = 'none';
    jsOverview.style.display = 'none';
    jsQuote.style.display = 'block';
    jsEms.style.display = 'none';
    jsCount.style.display = 'none';
}