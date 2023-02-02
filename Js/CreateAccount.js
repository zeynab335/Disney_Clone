
var CreateNewAccount = document.getElementById("cancel-new-account");

if(CreateNewAccount){
    CreateNewAccount.onclick = function(){
        location.href = "/Index.html?login";
    }
}


var AccountPath = "../../Assets/Images/Account/"
var carouselRegister = document.getElementById('carousel-inner-register');
var carouselItem1 = document.getElementById('carousel-item-1');
var carouselItem2 = document.getElementById('carousel-item-2');
var carouselItem3 = document.getElementById('carousel-item-3')


if(carouselRegister){

    for(var i=1 ; i<=5 ; i++ ){
        var element1 = document.createElement('img');
        element1.setAttribute('src',`${AccountPath}${i}.png`);
        element1.setAttribute('class',`d-block`);
        carouselItem1.append(element1);
    }
    
      
    for(var j=6 ; j<=11 ; j++ ){
        var element2 = document.createElement('img');
        element2.setAttribute('src',`${AccountPath}${j}.png`);
        element2.setAttribute('class',`d-block`);
        carouselItem2.append(element2);
    }

    for(var j=11 ; j<=15 ; j++ ){
        var element3 = document.createElement('img');
        element3.setAttribute('src',`${AccountPath}${j}.png`);
        element3.setAttribute('class',`d-block`);
        carouselItem3.append(element3);
    }
    

    
}