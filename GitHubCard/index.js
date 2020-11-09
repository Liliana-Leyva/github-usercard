import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    

    Skip to STEP 3.
*/
const getPromise = axios
.get("https://api.github.com/users/liliana-leyva")
.then((res) => {
  console.log(res);
  const information = cardCreator(res.data);
  document.querySelector(".cards").appendChild(information);
})
.catch((err) => {
  console.log("Oops",err);
});

console.log(getPromise);
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers', 'justsml','luishrd','bigknell'];

followersArray.forEach((i) => {
  axios
    .get(`https://api.github.com/users/${i}`)
    .then((res) => {
      console.log(res.data);
      const information = cardCreator(res.data);
      document.querySelector(".cards").appendChild(information);
    })
    .catch((err) => {
      console.log(err);
    });
});
console.log;

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/


const allCards= getPromise.data;
console.log(allCards)
const cardCreator = function(data){
  /*.card div */
  const card =  document.createElement('div');
  const picture = document.createElement('img');
  /* cardInfo Div  */
  const cardInfo = document.createElement('div');
  const h3Name = document.createElement('h3');
  const userNAme = document.createElement ('p');
  const userLocation = document.createElement ('p');
  const userProfile = document.createElement ('p');
  const userUlr = document.createElement ('a');
  const userFollowers = document.createElement('p');
  const userFolowwing = document.createElement('p');
  const userBio = document.createElement('p');
  /* cardInfo Div ends here*/

  /*.card div ends here */


  card.classList.add("card");
  card.appendChild(picture);
  card.appendChild(cardInfo);

  picture.src = data.avatar_url;

  cardInfo.classList.add("card-info");

  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(userNAme);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userUlr);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFolowwing);
  cardInfo.appendChild(userBio);

  h3Name.classList.add('name');
  h3Name.textContent = `${data.name}`
  
  userNAme.classList.add("username");
  userNAme.textContent = `Location: ${data.location}`;

  userProfile.textContent= 'Profile: ';
  userProfile.appendChild(userUlr);

  userUlr.href = data.html_url;
  userUlr.text = `${data.html_url}`;

  userFollowers.textContent = `Followers: ${data.followers}`;
  userFolowwing.textContent = `Following: ${data.following}`;

  userBio.textContent= `Bio: ${data.bio}`;

return card;

}