function saveData(){
    
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

    console.log(sessionStorage.getItem("Interpretation"));
    console.log(sessionStorage.getItem("Documents"));
    console.log(sessionStorage.getItem("Rationale"));
    console.log(sessionStorage.getItem("Version"));
    console.log(sessionStorage.getItem("Description"));

}

function getData(){
    
    let interpretation = sessionStorage.getItem("Interpretation");
    
    let docs = sessionStorage.getItem("Documents");
    
    let rationale = sessionStorage.getItem("Rationale");
    
    let version = sessionStorage.getItem("Version");
    
    let description = sessionStorage.getItem("Description");

    if(interpretation && docs && rationale != null){
        
        document.getElementById("Interp").innerHTML = interpretation;
        
        parentNode = document.getElementById("Docs");
        parentNode.innerHTML = docs;

        document.getElementById("Rationale").innerHTML = rationale;

        var childDiv = document.createElement("div");
        childDiv.id = "connections";

        var childImg1 = document.createElement("img");
        childImg1.id = "logo";
        childImg1.src = "icons/Connections.svg";

        var childImg2 = document.createElement("img");
        childImg2.classList.add("align-btns");
        childImg2.src = "icons/AddBtn.svg";

        parentNode.appendChild(childDiv);
        childDiv.appendChild(childImg1);
        childDiv.appendChild(childImg2);

    }
    else{
        // document.getElementById("Interp").innerHTML = "The margin of error (± 500 pounds) has uniform distribution.";
        // document.getElementById("Docs").innerHTML = "DMM-CSE-0431-01 RS-25 CSE Performance Model – Power Level Tags.pdf";
        // document.getElementById("Rationale").innerHTML = "Assuming a uniform distribution of ±500 pounds allows us to quickly calculate uncertainty estimates. Since we have a set of minimum bounding limits for the distribution and found inputs in DMM-BST-0536 suggesting that the probability of obtaining values between the minimum bounding limits is uniform, uniform distribution is appropriate.";
    }
    

}