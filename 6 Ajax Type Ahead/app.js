const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// console.log(endpoint);

const cities = [];

const promp = fetch(endpoint).then(blob => blob.json())
    // .then(data => console.log(data));
    .then(data => cities.push(...data)); // to spread the data individual not as a nested array


// now filter the data

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch,'gi'); // here g=global, i=insensitive means it handle uppercase and lowercase

        return place.city.match(regex) || place.state.match(regex);
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {
    // console.log(this.value);
    const matchArray = findMatches(this.value,cities);
    // console.log(matchArray);
    const html = matchArray.map(place => {
        // return `
        //     <li>
        //         <span class="name">${place.city}, ${place.state}</span>
        //         <span class="population">${place.population}</span>
        //     </li>
        // `;

        // if you want an highlight in your word then use below code rather than above


        const regex = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regex,`<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `

    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);


// the data thats come back from our fetch it dosen't know what kind of data it is.
// it could be an image, some html could be some music