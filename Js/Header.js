

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
                    <div class="carousel-item ${element.class ? element.class: ''}" 
                    >
                        <img src=${element.url} class="d-block w-100" alt="...">
                        <div class="carousel-caption d-md-block">
                            <img  src=${element.title} class="d-block position-absoulte" alt="..." />
                            <div class="carousel-item-container">
                                <span class="h5">${element.year}</span>
                                <span class="h5">${element.duration}</span>
                                <span class="h5">${element.languages}</span>
                                <span class="availableTo"> ${element.availableTo} </span>
                                <p class="category h5"> ${element.category   } </p>

                            </div>
                            <div class="d-flex w-100 btn-watch ">
                                <button class="subsribe btn btn-light me-2 py-4 fs-4 "> 
                                <i class="bi bi-caret-right-fill"></i>
                                Watch Now
                                </button>
                                <button class="add-to-Fav btn btn-light fs-1 py-0 my-0" > + </button>
                            </div>
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
                var allSiblings = this.parentNode.parentNode.children;

                for (const key in allSiblings) {
                    if (Object.hasOwnProperty.call(allSiblings, key)) {
                        var active = allSiblings[key].classList.contains('active')
                        if(!active)  
                        {
                            allSiblings[key].children[0].classList.remove('active')
                        }
                    }
               }
        
                
                
                  
                
            }
        }

         
    })
});

 
             