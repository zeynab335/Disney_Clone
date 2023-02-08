
var CreateNewAccount = document.getElementById("cancel-new-account");

if(CreateNewAccount){
    CreateNewAccount.onclick = function(){
        location.href = "/Index.html?login";
    }
}


var AccountPath = "../../Assets/Images/Account/"
var carouselRegister = document.querySelector('.carousel-items-register');

if(carouselRegister){


    for(let i=1 ; i<=15 ; i++ ){
        var element1 = document.createElement('img');
       
        element1.setAttribute('src',`${AccountPath}${i}.png`);
        // element1.setAttribute('class',`d-block`);
        carouselRegister.append(element1);
    }
    
    

    
}


// active image
var images = document.querySelectorAll('.carousel-items-register img');
var inner = document.querySelector('.carousel-items-register')
images[3].classList.add('active');


images.forEach((e)=>{
    
    e.onclick = () =>{
        
        var index = Array.from(e.parentNode.children).findIndex((e)=>e.classList.contains('active'));
        
        if(images[index].getBoundingClientRect().left > e.getBoundingClientRect().left ){
            inner.scrollLeft -= 160

        }
        else inner.scrollLeft += 160
        
        Array.from(e.parentNode.children).forEach((e)=>{
            e.classList.remove("active");
        })
        e.classList.add("active");


        
    }

})


document.querySelector('.Register-arrows .arrow-left').onClick = () => {
    console.log("djdj")
    inner.scrollLeft -= 200;
}

document.querySelector('.Register-arrows .arrow-right > img').addEventListener('click', () => {
    inner.scrollLeft += 200
})

