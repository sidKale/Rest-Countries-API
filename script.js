"use strict";

const countryContainer = document.querySelector(".country");

const showCountry = function (data, className = " ") {
  const html = `
  <article class="country ${className}">
        <img class="country--flag flag" src="${data.flag}" />
        <div class="country--data">
          <h3 class="country--name">${data.name}</h3>
          <h4 class="country--region">${data.region}</h4>
          <p class="country--population"><img src="https://img.icons8.com/ios-filled/50/000000/demographics.png"/><span></span> ${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country--lang"><span><img src="https://img.icons8.com/ios-filled/50/000000/talk-male.png"/> ${
            data.languages[0].name
          }</span></p>
          <p class="country--currency">
            <span><img src="https://img.icons8.com/ios-glyphs/30/000000/money-bag.png"/> ${
              data.currencies[0].name
            }</span>
          </p>
        </div>
      </article>`;
  countryContainer.insertAdjacentHTML("beforeend", html);
  countryContainer.style.opacity = 1;
};

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  const data = await res.json();
  console.log(data);
  showCountry(data[0]);
};
whereAmI("Bharat");
