var jsOverview = document.getElementById('overview');
var jsCovArea = document.getElementById('coverageArea');
var jsQuote = document.getElementById('quote');

function changeTextOverviewElec() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'block';
    jsOverview.innerHTML = '<h1>Electrical Services:</h1><br /><p>Cutting-Edge is a full-service electrical contractor that has been providing a full range of commercial and industrial services. We are a dedicated company offering national reach with licensed electrical contractors in the US and national buying power with the personalized service of a local contractor.<br /><br />Proven performance and strong relationships mean we have the experience and qualified manpower to tackle any size project. From electrical service and maintenance on a local or nationwide scale, to new construction. <br /><br /><b>Cutting Edge Lighting is here for our customers 24 hours a day for all your electrical needs.</b><br /><br /></p>';
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