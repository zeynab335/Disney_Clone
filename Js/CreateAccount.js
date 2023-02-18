
var CreateNewAccount = document.getElementById("cancel-new-account");

// global variable
let usrImgSrc = ""

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

$(function(){
    $('#profile-settings').load('./Html/Register/ProfileSetting.html');
})


//* Profile Name
document.getElementById('ProfileNameHandler').addEventListener( 'focus' ,() =>{
    // remove inactive images from slider
    var ActiveImage = Array.from(inner.children).filter(e=> {
        if(!e.childNodes[0].classList.contains('active')){
            e.remove();
        }
    });
    
    //* add profile image to localstorage
    usrImgSrc = inner.children[0].children[0].getAttribute('src');

    document.querySelector('.ProfileDetails').style.display = "flex"
    document.querySelector('.carousel-register').style.marginTop = "10px"
    document.querySelector('.btn-create-profile').style.display = "block"
    
    inner.classList.add('edit-Active-Img-Position')
    inner.children[0].childNodes[1].classList.replace('fa-check' , 'fa-pencil')
    inner.children[0].childNodes[1].classList.add('edit');

    document.querySelector('.Register-arrows').style.display = 'none';

})

//* check if profile name not empty
document.getElementById('ProfileNameHandler').onchange = function(){
    var btn =  document.querySelector('.btn-create-profile');
    if(this.value !== ""){
       btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute('disabled',true)
    }
}


//* go to change image
inner.addEventListener('click',()=>{
    if(inner.classList.contains('edit-Active-Img-Position')){
        document.querySelector('.carousel-register').style.marginTop = "100px"
        document.querySelector('.Register-arrows').style.display = 'flex';
        document.querySelector('.ProfileDetails').style.display = "none"
       
        inner.classList.remove('edit-Active-Img-Position')
        inner.children[0].childNodes[1].classList.replace('fa-pencil','fa-check')
        inner.children[0].childNodes[1].classList.remove('edit');
        document.querySelector('.btn-create-profile').style.display  = "none";
        LoadSlider(inner.children[0].childNodes[0]);

    }
    else{
        var images = document.querySelectorAll('.carousel-items-register img');
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
        
    }
    
    
})


//* submit 
document.querySelector('.btn-create-profile').onclick = function(){
    usrname = document.getElementById('ProfileNameHandler').value
    let usr = {usrname , imgSrc: usrImgSrc};
    //* get all objects from localstoge
    if(JSON.parse(localStorage.getItem('Accounts'))){
        allUsrs = [...JSON.parse(localStorage.getItem('Accounts')) , usr];   
    }
    else{
        allUsrs = [usr]
    }

    //* set usename into localstorage
    localStorage.setItem('Accounts' , JSON.stringify(allUsrs) );
    Toastify({

        text: "Added Successfully ❤✅",
        duration: 3000
        
    }).showToast();
}