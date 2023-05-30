const workProfile = document.querySelector(".modal-content-1");
const followMe = document.querySelector(".modal-content-2")

function showWorkProfile(){
    console.log("done");
    workProfile.classList.add("active");
}
function hideWorkProfile(){
    workProfile.classList.remove("active");
}
function showFollowMe(){
    followMe.classList.add("active");
}
function hideFollowMe(){
    followMe.classList.remove("active");
}
