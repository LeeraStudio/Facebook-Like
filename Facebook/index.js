function changeName(){

    const newName = prompt("Enter Your Name");
    if(newName){
        document.getElementById("newName").textContent = newName;
    };

};

function likePost(){
    alert("You liked this post!")
}


function commentPost(){
    const comment = prompt("Enter your comment:");
    if(comment){
        alert("your comment:" + comment);
    };
};
