
var CreateNewAccount = document.getElementById("cancel-new-account");

if(CreateNewAccount){
    CreateNewAccount.onclick = function(){
        location.href = "/Index.html?login";
    }
}

function LoadSlider(img = ""){
    var AccountPath = "../../Assets/Images/Account/"
    var carouselRegister = document.querySelector('.carousel-items-register');
    if(carouselRegister){
        
        for(let i=1 ; i<=15 ; i++ ){
            var parent   = document.createElement('div');
            var element1 = document.createElement('img');
            
            // this condition check if image exsit or not 
            if(img.src?.split('Account/')[1] == `${i}.png`){
                continue;
            }
            element1.setAttribute('src',`${AccountPath}${i}.png`);
            parent.append(element1);
            carouselRegister.append(parent);
        }
            
    }
    
}

LoadSlider();

var images = document.querySelectorAll('.carousel-items-register img');
    
images[3].classList.add('active');
icon = document.createElement("i")
icon.setAttribute('class','fa-solid fa-check fs-3 activeIcon')
images[3].parentElement.append(icon)


// active image
var inner = document.querySelector('.carousel-items-register')

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

    document.querySelector('.ProfileDetails').style.display = "flex"
    document.querySelector('.carousel-register').style.marginTop = "10px"
    
    inner.classList.add('edit-Active-Img-Position')
    inner.children[0].childNodes[1].classList.replace('fa-check' , 'fa-pencil')
    inner.children[0].childNodes[1].classList.add('edit');

    document.querySelector('.Register-arrows').style.display = 'none';


})

//* go to change image
inner.addEventListener('click',()=>{
    if(inner.classList.contains('edit-Active-Img-Position')){
        document.querySelector('.carousel-register').style.marginTop = "100px"
        document.querySelector('.Register-arrows').style.display = 'flex';
        document.querySelector('.ProfileDetails').style.display = "none"
       
        inner.classList.remove('edit-Active-Img-Position')
        inner.children[0].childNodes[1].classList.replace('fa-pencil','fa-check')
        inner.children[0].childNodes[1].classList.remove('edit');

        LoadSlider(inner.children[0].childNodes[0]);

    }
    else{
        var images = document.querySelectorAll('.carousel-items-register img');
        images.forEach((e)=>{
    
            e.onclick = () =>{
                console.log("Ss")
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
        
    }
    
    
})

//* toggle Icon

var btnToggle = document.querySelectorAll('.btn-toggle');
btnToggle.forEach((btn)=>{

    btn.onclick =()=>{
        btn.classList.toggle('active');
    }
    
})


//*rating-container

document.querySelector('.Rating').addEventListener('click',function(){
    document.querySelector('.rating-container').style.display = 'block'
})
