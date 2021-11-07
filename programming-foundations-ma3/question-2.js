// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=e556d30323aa4273be98df29d9b18790";
const resultsContainer = document.querySelector(".results")

async function getInfo() {

    const response =  await fetch(url);

    const object = await response.json();

    const info = object.results;

    resultsContainer.innerHTML = "";

    try {
    
        for(let i = 0; i < info.length; i++) {

            if (i === 8) {
                break;
            }
            resultsContainer.innerHTML += `<div class="result">${info[i].name}</div>`;
        }

        for(let i = 0; i < info.length; i++) {

            if (i === 8) {
                break;
           }
           resultsContainer.innerHTML += `<div class="result">${info[i].rating}</div>`;
       }

       for(let i = 0; i < info.length; i++) { 

           if (i === 8) {
               break;
           }
           resultsContainer.innerHTML += `<div class="result">${info[i].tags}</div>`;
       } 
    } catch (error) {
    resultsContainer.innerHTML = displayError("An error occurred when calling the API")
}
// I tried to use (toString) but could not make the array turn into numbers
    
  

}

getInfo();
