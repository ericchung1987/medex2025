

let users = $("#userid").html();

let database = JSON.parse(users);


for(item in database){
    delete database[item]._id;
    delete database[item].email;
    delete database[item].username;
    delete database[item].osceAnswer;
    delete database[item].mcqAnswer;
    delete database[item].rapidAnswer;
    delete database[item].surveyScore;
    delete database[item].email;
    delete database[item].mcqStartTime;
    delete database[item].osceStartTime;
    delete database[item].rapidStartTime;
    delete database[item].surveyComment;
    delete database[item].__v,
    delete database[item].rapidMark,
    delete database[item].osceMark
}


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
// let data = Object.keys(database[0]);
let data = ["name", "mcqs", "mcqc", "osces", "oscec", "rpds", "rpdc", "mscore", "oscore", "rscore", "survey"];
generateTable(table, database);
generateTableHead(table, data);



window.setTimeout(function () {
    window.location.reload();
  }, 120000);
