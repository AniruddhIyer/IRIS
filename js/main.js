var check = "initial";
var val = true;

function getData(){
    
    let interpretation = sessionStorage.getItem("Interpretation");
    
    let docs = sessionStorage.getItem("Documents");
    
    let rationale = sessionStorage.getItem("Rationale");
    
    let version = sessionStorage.getItem("Version");
    
    let description = sessionStorage.getItem("Description");

    if(interpretation && docs && rationale != null){
        
        document.getElementById("Interp").innerHTML = interpretation;

        document.getElementById("version-name").innerHTML = version;
        
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
        
        let cs = document.getElementById("comment-section");
        cs.src = "Discussions/StartFade.svg";

        setTimeout(function(){ 

            let cs = document.getElementById("comment-section");
            cs.src = "Discussions/Finish.svg";
            check = "resolution";

            let unread = sessionStorage.getItem("Unread");
            let newNotif = document.getElementById("notif-id1");
            newNotif.style.display = "flex";
            if(unread == 0){
                unread = Number(unread)+1;
                let span = document.getElementById("unread-number");
                span.style.display = "block";
                span.innerHTML = String(unread);
            }
            else{
                unread = Number(unread)+1;
                let span = document.getElementById("unread-number");
                span.innerHTML = String(unread);
            }

        }, 5000);

    }
    else{
        // document.getElementById("Interp").innerHTML = "The margin of error (± 500 pounds) has uniform distribution.";
        // document.getElementById("Docs").innerHTML = "DMM-CSE-0431-01 RS-25 CSE Performance Model – Power Level Tags.pdf";
        // document.getElementById("Rationale").innerHTML = "Assuming a uniform distribution of ±500 pounds allows us to quickly calculate uncertainty estimates. Since we have a set of minimum bounding limits for the distribution and found inputs in DMM-BST-0536 suggesting that the probability of obtaining values between the minimum bounding limits is uniform, uniform distribution is appropriate.";
        let newNotif = document.getElementById("notif-id1");
        newNotif.style.display = "none";
    }
    
    // console.log(document.getElementsByClassName("notif-highlight"));
}

function fadeDiscussion(){
    if(check == "initial"){
        let cs = document.getElementById("comment-section");
        cs.src = "Discussions/StartFade.svg";
    }
    else if(check == "resolution"){ 
        let cs = document.getElementById("comment-section");
        cs.src = "Discussions/FinishFade.svg";
    }
}

function openEditModal(){
    let modal = document.getElementById("EditModal");
    modal.style.display = "block";
}

function closeEditModal(){
    let modal = document.getElementById("EditModal");
    modal.style.display = "none";
}

window.onclick = function(event){
    let editModal = document.getElementById("EditModal");
    let attachModal = document.getElementById("AttachModal");
    if(event.target == editModal){
        editModal.style.display = "none";
    }
    else if(event.target == attachModal){
        attachModal.style.display = "none";
    }
}

function expandImg(){
    let img = document.getElementById("edit-img");
    // console.log(val);
    if(val == true){
        img.src = "images/EditConnectionsExpanded.svg";
        val = false;
    }
    else if(val == false){
        img.src = "images/EditConnections.svg";
        val = true;
    }
}


function openAttachModal(){
    let modal = document.getElementById("AttachModal");
    modal.style.display = "block";
}

function closeAttachModal(){
    let modal = document.getElementById("AttachModal");
    modal.style.display = "none";
}