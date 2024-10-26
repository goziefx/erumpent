let myButton = document.getElementById("menubar");
     let myImg = document.getElementById("ham");

     myButton.addEventListener("click", event => {

        if(myImg.style.display === "block"){
            myImg.style.display = "none"
        }
        else{
            myImg.style.display = "block";
        }

     })




/*let showOrHide = function (){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = flase;
    }else{
        divContainer.style.display = 'none'
        isClicked = true
    }
}*/