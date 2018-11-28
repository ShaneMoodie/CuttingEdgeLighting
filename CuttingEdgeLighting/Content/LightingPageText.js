var jsOverview = document.getElementById('overview');
var jsInterior = document.getElementById('interior');
var jsExterior = document.getElementById('exterior');
var jsCovArea = document.getElementById('coverageArea');
var jsQuote = document.getElementById('quote');


function changeTextOverview() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'block';
    jsInterior.style.display = 'none';
    jsExterior.style.display = 'none';
}
function changeTextInterior() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'none';
    jsInterior.style.display = 'block';
    jsExterior.style.display = 'none';
}

function changeTextExterior() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'none';
    jsInterior.style.display = 'none';
    jsExterior.style.display = 'block';
}

function changeTextCoverage() {
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'none';
    jsCovArea.style.display = 'block';
    jsInterior.style.display = 'none';
    jsExterior.style.display = 'none';
}

function changeTextQuote() {
    jsCovArea.style.display = 'none';
    jsOverview.style.display = 'none';
    jsQuote.style.display = 'block';
    jsInterior.style.display = 'none';
    jsExterior.style.display = 'none';
}
