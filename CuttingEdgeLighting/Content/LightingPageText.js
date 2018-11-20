var jsOverview = document.getElementById('overview');
var jsCovArea = document.getElementById('coverageArea');
var jsQuote = document.getElementById('quote');


function changeTextOverview() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'block';
    jsOverview.innerHTML = '<h1>Lighting Service:</h1> <br /> <p> At Cutting Edge Lighting from dusk to dawn, inside or outside, our lighting and electrical service specialists will accommodate all of your lighting maintenance needs. Cutting Edge Lighting has the technical know-how and staff to install and maintain your lighting and keep it performing to manufacturer’s specifications.</p>';
}
function changeTextInterior() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'block';
    jsOverview.innerHTML = '<h1>Interior Lighting:</h1> <br /> <p>Expert lighting maintenance from helps control your cost while giving your staff the freedom to address other issues. We offer competitive hourly rates for lighting repair services and dispatch only qualified technicians in fully stocked service vehicles. Flat rate pricing is available which will eliminate guesswork with one installed price for each service or product installed. </p>';
}

function changeTextExterior() {
    jsCovArea.style.display = 'none';
    jsQuote.style.display = 'none';
    jsOverview.style.display = 'block';
    jsOverview.innerHTML = '<h1>Exterior and Parking Lot Lighting:</h1> <br /> <p> Maintaining parking lot, building, and sign lighting is a very important part of business and property maintenance.Good lighting is good for business and for the safety of the customers visiting the business.We believe a well - lit facility gives customers, tenants and employees a feeling of security and confidence at night, inviting visitation and increasing revenue.Our service vans and bucket trucks are fully stocked with a complete inventory of lighting replacement parts for servicing most commercial businesses.This reduces your repair time and costs. </p>';
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
