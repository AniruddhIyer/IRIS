function readNotif1(){
    var id1 = document.getElementById("notif-id1");
    let span = document.getElementById("unread-number");
    if(unread == 0){
        return;
    }
    else if((unread-1) == 0){
        unread = unread - 1;
        id1.classList.remove("notif-highlight");
        // id1.style.backgroundColor = "#001862";
        span.style.display = "none";
    }
    else{
        unread = unread - 1;
        id1.classList.remove("notif-highlight");
        // id1.style.backgroundColor = "#001862";
        span.innerHTML = String(unread);
    }
    sessionStorage.setItem("Unread", unread);
    return;
}

function readNotif2(){
    
    var id2 = document.getElementById("notif-id2");
    let span = document.getElementById("unread-number");
    if(unread <= 0){
        return;
    }
    else if((unread-1) == 0){
        unread = unread - 1;
        id2.classList.remove("notif-highlight");
        id2.style.backgroundColor = "#001862";
        span.style.display = "none";
    }
    else{
        unread = unread - 1;
        id2.classList.remove("notif-highlight");
        span.innerHTML = String(unread);
    }
    sessionStorage.setItem("Unread", unread);
    return;
}

function readNotif3(){
    var id3 = document.getElementById("notif-id3");
    let span = document.getElementById("unread-number");
    if(unread == 0){
        return;
    }
    else if((unread-1) == 0){
        unread = unread - 1;
        id3.classList.remove("notif-highlight");
        span.style.display = "none";
    }
    else{
        unread = unread - 1;
        id3.classList.remove("notif-highlight");
        span.innerHTML = String(unread);
    }
    sessionStorage.setItem("Unread", unread);
    return;
}


function getUnreadNumber(){
    console.log("here");
    let span = document.getElementById("unread-number");
    let unreadNo = sessionStorage.getItem("Unread");
    span.innerHTML = String(unreadNo);

}
