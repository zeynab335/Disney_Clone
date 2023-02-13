
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
        var parent   = document.createElement('div');
        var element1 = document.createElement('img');
       
        element1.setAttribute('src',`${AccountPath}${i}.png`);
        parent.append(element1);
        carouselRegister.append(parent);
    }
        
}


// active image
var images = document.querySelectorAll('.carousel-items-register img');
var inner = document.querySelector('.carousel-items-register')


images[3].classList.add('active');
icon = document.createElement("i")
icon.setAttribute('class','fa-solid fa-check fs-3 activeIcon')
images[3].parentElement.append(icon)


images.forEach((e)=>{
    
    e.onclick = () =>{
        
        var elements = Array.from(e.parentNode.parentNode.children)
        var index = elements.findIndex((e)=>e.childNodes[0].classList.contains('active'));
        
        if(images[index].getBoundingClientRect().left > e.getBoundingClientRect().left ){
            inner.scrollLeft -= 160
        }
        else inner.scrollLeft += 160
        
        elements.forEach((e)=>{
            e.childNodes[0].classList.remove("active");
            e.childNodes[1]?.remove()
        })
        e.parentElement.childNodes[0].classList.add("active");
        
        
        icon = document.createElement("i")
        icon.setAttribute('class','fa-solid fa-check fs-3 activeIcon')
        
        e.parentElement.append(icon)

        
    }

})


document.querySelector('.Register-arrows .arrow-left > img').addEventListener('click', () => {
    inner.scrollLeft -= 200;
})

document.querySelector('.Register-arrows .arrow-right > img').addEventListener('click', () => {
    inner.scrollLeft += 200
})



//* Profile Name
document.getElementById('ProfileNameHandler').addEventListener( 'focus' ,() =>{
    // remove inactive images from slider
    var ActiveImage = Array.from(inner.children).filter(e=> {
        if(!e.childNodes[0].classList.contains('active')){
            e.remove();
        }
    });

    inner.classList.add('edit-Active-Img-Position')
    inner.children[0].childNodes[1].classList.replace('fa-check' , 'fa-edit')
    
    document.querySelector('.Register-arrows').style.display = 'none';

})