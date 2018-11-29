var jsOverview = document.getElementById('overview');
var jsImportance = document.getElementById('importance');

function changeTextOverviewPM() {
    jsOverview.style.display = 'block';
    jsImportance.style.display = 'none';
}

function changeTextPM() {
    jsOverview.style.display = 'none';
    jsImportance.style.display = 'block';
}