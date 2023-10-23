const appSettings = {
    databaseURL:"https://tds-monitoring-e7afb-default-rtdb.asia-southeast1.firebasedatabase.app/" // linked my databse to a variable in JS
}
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js" // imported a function initializeApp from the link provided, which needs an argument

const app = initializeApp(appSettings) //constructed a variable app which passes argument appSettings i.e. my database to the imported function; and likes my project to the function imported

import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" //imported another function

const database = getDatabase(app) // set database to imported funtion getDatabase with argument of our project which allows us to fetch and push items in database

const valueInDb = ref(database, "tds-value") // assigned a variable to function ref, which needs two arguments namely the database to opush in and the title of objects to be pushed in

const para1 = document.getElementById("para1")

onValue(valueInDb, function(snapshot){   //onValue is a Firebase fxn which allows to fetch data from server i.e. "snapshot"; we gave two arguments
    //we give two arguments, first "taskInDb" to specify the database from where to read items, and other being a function with snapshots as arguments.
    if (snapshot.exists()){
        console.log(snapshot)
        console.log(snapshot.val())  
                    // We used to encounter an error while deleting the last element from the DB, so, Firebase recommends having 'snapshot.exists as TRUE'. This is why we added If condition.
        let obToAr = snapshot.val()  //items are stored as object in firebase, to convert to array, we have 3 fxns:
           
            // Object.values( objectname )---->returns values of the object as array
          
            //note: "snapshot.val()" is important to be written as argument instead of "snapshot"
        
            para1.textContent = obToAr
    }

    else{
        para1.textContent = "No Value"
    }
}
)