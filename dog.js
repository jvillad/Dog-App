const ALL_BREED = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds');

//Getting all breeds for selecction
fetch(ALL_BREED)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        
        for (let index = 0; index < breedsArray.length; index++) {
           const option = document.createElement('option');
           option.value = breedsArray[index];
           option.innerText = breedsArray[index];
           select.appendChild(option);
            
        }
    })
    
select.addEventListener('change', function(event) {
    const breed = event.target.value;
    const DOG_BREED = `https://dog.ceo/api/breed/${breed}/images/random`;
    
    dogBreed(DOG_BREED);
    
});
const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

//fetch based on user selected breed
function dogBreed(breed) {
    
    spinner.classList.add("show");
    img.classList.remove("show");

    fetch(breed)
    .then(function(response) {
    return response.json();
    
    })  
    .then(function(data) {
       
        img.src = data.message;
       
    })

}

img.addEventListener("load", function() { 
    spinner.classList.remove("show");
    img.classList.add("show");
})
