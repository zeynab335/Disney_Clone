

const carouselItems = [
    {
        url : '../Assets/Images/Header/Menu.jpeg',
        title : '../Assets/Images/Header/Title/Menu.png',
        year : 2022,
        duration : '1h 47m',
        availableTo: '18+',
        class:'active'
    },
    {
        url : '../Assets/Images/Header/Home.jpeg',
        title : '../Assets/Images/Header/Title/Home.png',
        year : 2022,
        duration : '1h 47m',
        availableTo: '18+'
    },
    {
        url : '../Assets/Images/Header/Cuttputlli.jpeg',
        title : '../Assets/Images/Header/Title/cuttputlli.png',
        year : 2022,
        duration : '1h 47m',
        availableTo: '18+'
    },
    {
        url : '../Assets/Images/Header/Super_Junior.jpeg',
        title : '../Assets/Images/Header/Title/coffe.png',
        year : 2022,
        duration : '1h 47m',
        availableTo: '18+'
    }

]

carouselItems.forEach(element => {
    $('#carousel-header-inner').append(
            `
            <div class="carousel-item-overlay"> </div> 
            <div class="carousel-item ${element.class ? element.class: ''}">
                <img src=${element.url} class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${element.duration}</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            `
    )}
)
      
for (let i = 0; i < carouselItems.length; i++) {
    $('.carousel-indicators button').eq(i).append(
        `<img src=${carouselItems[i].url} class="d-block carousel-indicators-img" alt="..." >`
    )

  
}


$('.carousel-indicators button img').each(function(){
    $(this).click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
    })
})

             