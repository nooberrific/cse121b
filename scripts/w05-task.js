/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        /* Create an HTML <article> element (createElement). */
        const article = document.createElement("article");

        /* Create an HTML <h3> element and add the temple's templeName property to this new element. */
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        /* Create an HTML <img> element and add the temple's imageUrl 
        property to the src attribute and the temple's location property to the alt attribute. */
        const imageElement = document.createElement("img");
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;

        /* Append the <h3> element and the <img> element to the <article> element as children. (appendChild) */
        article.appendChild(h3Element);
        article.appendChild(imageElement);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const fetchResponse = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        /* Check for success */
        if (!fetchResponse.ok) {
            throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
        }

        const templeData = await fetchResponse.json();

        templeList = templeData;

        /* The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).*/
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

getTemples();

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = () => {
    reset();

    const filter = document.getElementById("sortBy").value;

    switch (filter) {
        case "utah":
            displayTemples(templeList.filter((temple) => temple.location.includes("Utah")));
            break;

            case "notutah":
            console.log("Filtering non-Utah temples");
            displayTemples(templeList.filter((temple) => !temple.location.includes("Utah")));
                break;

        case "older":
            displayTemples(templeList.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            displayTemples(templeList);
            break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", sortBy);