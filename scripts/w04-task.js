/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Anne Mariáh Leal Picanço",
    photo: "images/profile.jpg",
    favoriteFoods: [
    "Brazilian CheeseBurger",
    "Pasta", 
    "Pizza", 
    "Doce de Leite",  
    "Birthday Cake", 
    "Mousse of Maracujá"
    ],
    hobbies: [
        "Reading",
        "Swimming",
        "Organazing",
        "Go to the temple",
        "Spent time with myself"
    ],
    placesLived: []

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Campina Grande, PB - Brazil",
        length: "20 years",
    },
    {
        place: "Salvador, BA - Brazil",
        length: "18 Months"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `profile image of ${myProfile.name}`);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
})
/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement("dt");
    dt.textContent = places.place;
    let dd = document.createElement("dd");
    dd.textContent = places.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
} )
