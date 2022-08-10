function check(num,ele){
    let user= ele.parentElement;
    let userValue = user.querySelector('input[type="text"]').value;
    let cardF = user.nextElementSibling;
    if(userValue == num){
        cardF.textContent = "CORRECT ANGLE";
        cardF.classList.remove("text-danger");
        cardF.classList.add("text-success");
    }else{
        cardF.textContent = "WRONG ANGLE";
        cardF.classList.remove("text-success");
        cardF.classList.add("text-danger");
    }
     
    cardF.classList.remove("hidden");
    cardF.classList.add("show");

}

function inpFunction(event){
     let x = event.which || event.keyCode;
     if(x >= 96 && x<=105){
       return true;
     }
     else if(x == 8){
       return true;
     }
     return false;
}