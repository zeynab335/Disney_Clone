let categories = document.querySelectorAll('.category-wrapper');

categories.forEach((category)=>{
    category.onmouseover = function(){
        
        category.children[0].style.opacity = 0;
        category.children[1].style.opacity = 1;

        category.children[1].play();
        category.loop = true;


    }
    category.onmouseout = function(){
        category.children[0].style.opacity = 1;
        category.children[1].style.opacity = 0;

        category.children[1].pause();

    }
})