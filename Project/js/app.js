console.log("now its work")

// IF user add a note, add it to the localStorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("Click",function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj= [];

    }
    else{
        notesObj = JSON.parse(notes);
     }
     notesObj.push(addTxt.value);
     localStorage.setItem("notes", JSON.stringify(notes));
     addTxt.value="";
     console.log(notesObj)
     

})
