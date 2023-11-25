/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mickey Nelson",
    photo: "images/Suit.jpg",
    favoriteFoods: [
    'Scrambled eggs',
    'French fries',
    'Ham Sandwiches',
    'Steak',
    ],
    hobbies: [
    'Reading',
    'Playing guitar',
    'Hiking',
    'Video Games'
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "American Fork, UT",
        length: "5 years"

    },
    {
        place: "Vacaville, CA",
        length: "1 year"
    },
    {
        place: "Grangeville, ID",
        length: "14 years"
    },
    {
        place: "Rexburg, ID",
        length: "2 years"
    }
);




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
let photoElement = document.getElementById('photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name; 

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach (hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.getElementById('places-lived');

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
})
