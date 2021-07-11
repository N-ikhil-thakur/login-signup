function $(query){
    return  document.querySelector(query);
}

function $A(query){
    return  document.querySelectorAll(query);
}



function cleanClass(doms,class_list){
    doms.forEach(dom => {
        $(dom).classList.remove(...class_list)
    });
}

window.MouseEvent = (e)=>{
    e.preventDefault();
}


signUpPageBtn = $(".login #right #actions #sign_up");
signInPageBtn = $(".signup #left #actions #sign_in");
signUpProgressBtn = $(".signup #right #actions #submit");
emailConfirmationBackBtn = $(".signup #email_confirmation_container #actions #back");

classes = ["rise","fade","l_move_left","l_move_right","s_move_left","s_move_right","move_right","move_left","move_neutral"]
doms = [".login",".signup",".signup #right",".signup #left", ".login #left",".login #right"]

function performSignInToSignUpTransition(doms, classes){
    cleanClass(doms,classes);
    
    $(".login #right").classList.add("l_move_right");
    $(".login #left").classList.add("l_move_right");
    $(".login").classList.add("fade")

    setTimeout(()=>{
        $(".login").classList.add("hidden");
        $(".signup").classList.replace("hidden","rise");
    },490)
}

function performSignUpToSignIpTransition(doms,classes){
    cleanClass(doms, classes);

    $(".signup #right").classList.add("l_move_right");
    // $(".signup #email_confirmation_container").classList.add("s_move_left");
    $(".signup #left").classList.add("l_move_right");
    $(".signup").classList.add("fade");

    setTimeout(()=>{
        $(".signup").classList.add("hidden");
        $(".login").classList.replace("hidden","rise")
    },490)
}

function performSignUpToEmailConfirmationTransition(doms=[],classes){
    cleanClass([".signup #right #registration_container",".signup #email_confirmation_container"],classes)

    $(".signup #right #registration_container").classList.add("invisible");
    $(".signup #right #registration_container").classList.add("move_left");
    $(".signup #right #email_confirmation_container").classList.add("move_left")
    $(".signup #right #email_confirmation_container").classList.remove("invisible")
}


function performEmailConfirmationToSignUpTransition(doms=[],classes){
    cleanClass([".signup #right #registration_container",".signup #email_confirmation_container"],classes)

    $(".signup #right #registration_container").classList.add("move_neutral");
    $(".signup #right #registration_container").classList.remove("invisible");
    $(".signup #right #email_confirmation_container").classList.add("move_neutral");
    $(".signup #right #email_confirmation_container").classList.add("invisible")


}

signUpPageBtn.onclick = (e)=>{
    performSignInToSignUpTransition(doms,classes);
}

signInPageBtn.onclick = (e) => {
    performSignUpToSignIpTransition(doms,classes)    
}

signUpProgressBtn.onclick = (e) => {
    performSignUpToEmailConfirmationTransition([],classes);
}

emailConfirmationBackBtn.onclick = (e) => {
    performEmailConfirmationToSignUpTransition([],classes);
}




window.onload = () => {
    height = window.innerHeight;
    width = window.innerWidth;


    if(width<=800){
        $("body").style.height = `${height}px`;    
        $(".page_container").style.height = `${height}px`;  
    }
}

// $A("input").forEach((elem,indx) => {
//     elem.addEventListener('focus',(e)=>{
//         $("body").style.height = `100vh`;    
//     })

//     elem.addEventListener('blur',(e)=>{
//         $("body").style.height = `${window.innerHeight}px`;    
//     })
// })