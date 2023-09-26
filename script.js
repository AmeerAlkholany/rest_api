//variables
const div = document.querySelector('.country_card');
const search = document.querySelector('.search_input');
const btn = document.querySelector('.btn');
const filter = document.querySelector('.filter');
const menu = document.querySelector('.dropdown-menu');



//fetching
let x 
fetch('https://restcountries.com/v3.1/all')
.then((res) => res.json())
.then((data)=>{
  render(data)
  x = data
  
})

//rendingData

function render(data){
  div.innerHTML = ''
data.forEach((country) => {
  const create = document.createElement('a')
  create.href = `/countries.html?name=${country.name.common}`
  create.innerHTML = `
  <div class="card">
  <img src="${country.flags.svg}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>
    <p class="card-text"><b>Population: </b>${country.population}</p>
    <p class="card-text"><b>Region: </b>${country.region}</p>
    <p class="card-text"><b>Capital: </b>${country.capital}</p>
  </div>
  `
  
  div.append(create)
});

}



//Dark_Mode_code
btn.addEventListener('click', function(){  
const body = document.body;
const card = document.querySelectorAll('.card');
const header = document.querySelector('.header_content');
header.classList.toggle('dark_mode2')
body.classList.toggle('dark_mode');
search.classList.toggle('dark_mode2');
filter.classList.toggle('dark_mode2');
menu.classList.toggle('dark_mode2')

card.forEach((car)=>{
  car.classList.toggle('dark_mode2')
})

})
//search_bar
search.addEventListener('input', (e)=>{
  const sear = x.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  render(sear)

})




