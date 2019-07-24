var a = document.getElementById("save-data");

a.addEventListener("click", function(event){
    let interpretation = document.getElementById("Interp");
    sessionStorage.setItem("Interpretation", interpretation.value);

    let docs = document.getElementById("Docs");
    sessionStorage.setItem("Documents", docs.value);

    let rationale = document.getElementById("Rationale");
    sessionStorage.setItem("Rationale", rationale.value);

    let version = document.getElementById("Version");
    sessionStorage.setItem("Version", version.value);

    let description = document.getElementById("Desc");
    sessionStorage.setItem("Description", description.value);

    if(description.value == ""){
        event.preventDefault();
        alert("Please Enter the Description of the Version!!");
    }
    if(version.value == ""){
        event.preventDefault();
        alert("Please Enter the Version Name!!");
    }
    // console.log(sessionStorage.getItem("Interpretation"));
    // console.log(sessionStorage.getItem("Documents"));
    // console.log(sessionStorage.getItem("Rationale"));
    // console.log(sessionStorage.getItem("Version"));
    // console.log(sessionStorage.getItem("Description"));
    
    unread = sessionStorage.getItem("Unread");
    unread = unread+1;
    sessionStorage.setItem("Unread", unread);

});