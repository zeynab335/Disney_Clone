
//* toggle Icon

var btnToggle = document.querySelectorAll('.btn-toggle');
btnToggle.forEach((btn)=>{

    btn.onclick =()=>{
        btn.classList.toggle('active');
    }
    
})


//*rating-container

document.querySelector('.form-select')?.addEventListener('click',function(){
    document.querySelector('.ratings-container').classList.toggle('show');
    document.querySelector('.bi').classList.toggle('bi-caret-up-fill');

})

document.querySelectorAll('.rating-wrapper').forEach((rate)=>{
    rate.addEventListener('click',function(){
        var parentElement = Array.from(rate.parentNode.children)
        var index = parentElement.indexOf(rate)

        for (let i = 0; i <index+1; i++) {
            parentElement[i].children[0].children[0].classList.add('fa-check')
        }
        for (let i = index+1; i <parentElement.length; i++) {
            parentElement[i].children[0].children[0].classList.remove('fa-check')
        }
        document.getElementById('rated-number').innerText = (parentElement[index].children[1].innerText)
        
    })
})