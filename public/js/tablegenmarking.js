

let users = $("#userid").html();

let database = JSON.parse(users);

for(item in database){
    delete database[item]._id;
    delete database[item].email;
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
    delete database[item].mcqStarted,
    delete database[item].osceStarted,
    delete database[item].rapidStarted,
    delete database[item].surveyCompleted;
    delete database[item].mcqCompleted,
    delete database[item].osceCompleted,
    delete database[item].rapidCompleted,
    delete database[item].osceMark,
    delete database[item].rapidMark
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
        let count = 0;

        for (key in element) {
            count += 1;
            let cell = row.insertCell();
            if (count == 4) {
                if (element[key] == "") {
                    let username = element["username"];
                    let addon = "<a href='/oscemark?username=" + username +"' class='btn btn-primary'>Mark</a>";
                    cell.innerHTML += addon;
       
                }
                else
                {
                    cell.innerHTML = element[key];
                }
            }
            else if (count == 5){
                if (element[key] == "") {
                    let username = element["username"];
                    let addon = "<a href='/rapidmark?username=" + username +"' class='btn btn-primary'>Mark</a>";
                    cell.innerHTML += addon;
          
                }
                else
                {
                    cell.innerHTML = element[key];
                }
            }else{
                cell.innerHTML = element[key];
            }
            
           
        }
        
    }
}

let table = document.querySelector("table");
let data = Object.keys(database[0]);
// let data = ["name", "mcqs", "mcqc", "osces", "oscec", "rpds", "rpdc", "mscore", "oscore", "rscore", "survey"];
generateTable(table, database);
generateTableHead(table, data);



window.setTimeout(function () {
    window.location.reload();
  }, 120000);
