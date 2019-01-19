//=============================The Javascript===================================
//-------------------------------Variables--------------------------------------
var jobs            = [],   //jobs array
    positions       = [],   //position titles
    companies       = [],   //company titles
    locations       = [],   //location titles
    tableRows       = document.querySelectorAll("#postingsTable tr"),               //Selects all rows in table
    posTitles       = document.querySelectorAll(".orgDivTitleMaxWidth span a");     //Selects all position titles

//------------------------Search and Save Variables-----------------------------
//puts all position titles into an array
for(let i = 0; i < posTitles.length; i++) {
    positions.push(posTitles[i].textContent.trim());
}
//puts all the companies into an array
for(let i = 1; i < tableRows.length; i++) {
    companies.push(tableRows[i].querySelectorAll("td")[4].textContent);
    locations.push(tableRows[i].querySelectorAll("td")[8].textContent);
}

//-------------------------Push into Object Array-------------------------------
jobs.push(positions);
jobs.push(companies);
jobs.push(locations);

var html = "";
html += "<!DOCTYPE html>\n<html lang='en' dir='ltr'>\n<head>\n<title>Waterloo Shortlist Table</title>\n<link rel='stylesheet' type='text/css' href='./shortlists.css'>\n</head>\n<body>\n";
html += "<div class='main'>\n<h1>Prospective Jobs Table</h1>"
html += "<table>\n<tr class='titles'>\n";
html += "<td><strong>Position</strong></td>\n<td><strong>Company</stong></td>\n<td><strong>Location</strong></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n";
for(let i = 0; i < jobs[0].length; i++) {
  html += "<tr>\n";
  html += "<td>" + jobs[0][i] + "</td>\n";
  html += "<td>" + jobs[1][i] + "</td>\n";
  html += "<td>" + jobs[2][i] + "</td>\n";
  html += "<td><button class='save'>Save</button></td>\n"
  html += "<td><button class='maybe'>Maybe</button></td>\n"
  html += "<td><button class='remove'>Remove</button></td>\n"
  html += "<td><button class='undo'>Undo</button></td>\n"
  html += "</tr>\n"
}
html += "</table>\n</div>\n<script type='text/javascript' src='./shortlists.js'></script>\n</body>\n</html>";

console.log(html);
