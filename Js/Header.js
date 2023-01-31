

var carouselItems = []


// fetch data from json file
const response = fetch('../Data/data.json').then(function(response){
    response.json().then(function(data){
        data.forEach(element => {
            carouselItems.push(element);

        });
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
                `<img src=${carouselItems[i].url} class="${carouselItems[i].class} d-block carousel-indicators-img " alt="..." >`
            )

        }


        var list = document.querySelectorAll('.carousel-indicators-img');
        for(var i=0 ; i<list.length ; i++){
            list[i].onclick = function(){
                this.classList.add('active');
                this.style.border ="2px solid white" ;
                  
                var allSiblings = this.parentNode.parentNode.children;

                for (const key in allSiblings) {
                    if (Object.hasOwnProperty.call(allSiblings, key)) {
                        var active = allSiblings[key].classList.contains('active')
                        if(!active)  
                        {
                            
                        }
                    }
               }
        
                
                
                  
                
            }
        }

         
    })
});

 
             