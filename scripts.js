
/*
    Snap Academy Project
    Charlie Kaing
*/




//object for csv
//Class that has each show title along with their images and bullet points
//File Reader for the csv
// Replace individual bulletpoints with description
class Netflix {
    constructor(title,image,bullet1)
    {
        this.title = title;
        this.image = image;
        this.bullet1 = bullet1;

    }
    gettitle(){
        return this.title;
    }
    getimage(){
        return this.image;
    }
    getbullet()
    {
        return this.bullet1;
    }
    editbullet(newstring){
        this.bullet1 = newstring;
    }
    editname(newstring)
    {
        this.title = newstring;
    }
    editimage(newstring)
    {
        this.image = newstring;
    }

}
/*
* Current dataset of netflix shows
*/
const squid = new Netflix("Squid Game","https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg","Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.");
const blood = new Netflix("Blood & Water","https://upload.wikimedia.org/wikipedia/en/0/0a/Blood_and_water_title_card.png","A painful past meets an uncertain present as Fiks struggles with her identity. Meanwhile, a shocking request threatens to hamper Puleng's progress.");
const angry = new Netflix("Angry Birds","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPTlr_zCFaCUWfdWl9ZwkxFufMLACF8ws-daxlEbv58UCFAg4K","The feud between the flock of birds and the egg-stealing pigs continues in this animated series based on the popular video game.");
const turning = new Netflix("Turning Point: 9/11 and the War on Terror","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2Mxof7cx-0J07nPOn5iKwpCtej74eWRkMWmG_CfBd7dYJJfca","This unflinching series documents the 9/11 terrorist attacks, from Al Qaeda's roots in the 1980s to America's response, both at home and abroad.");
const money = new Netflix("Money Heist: From Tokyo to Berlin","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrIHZTjT5PB3jZfE5rLnX0KN73uz3QXymJPVvX23lRKwOhLk_L","It's the end of an era for the showrunners and actors behind \"Money Heist\" who share secrets about filming while saying goodbye to the beloved series.");
const wheel = new Netflix("Wheel of Fortune","https://m.media-amazon.com/images/M/MV5BMjFhMmUyZmQtYThhMC00YTJlLTllMzMtZDIzYjQ0MmQ0MTVhXkEyXkFqcGdeQXVyNTU2NDQ3NjU@._V1_.jpg","Pat Sajak and Vanna White host one of TV's most popular, long-running game shows, where players spin a wheel for prizes and solve mystery phrases.");
const hit = new Netflix("Hit & Run","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5N8ZVJsgvhXKHYIjrwiaxjePD1KJP-HylId_gayCpw_jDT5Yc","A man searching for the truth behind his wife's death becomes caught up in a dangerous web of secrets and intrigue stretching from New York to Tel Aviv.");
const dead = new Netflix("The Walking Dead","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthRY_pgm7ohLz6pspqsoS64OqQHaWfh37lUjRvFZhfQ&s","In the wake of a zombie apocalypse, survivors hold on to the hope of humanity by banding together to wage a fight for their own survival.");
const movie = new Netflix("The Movies That Made Us","https://static.tvtropes.org/pmwiki/pub/images/movies_that_made_us_2_3_4.jpg","These blockbusters brought us together and gave us the time of our lives. Meet the actors, directors and industry insiders who made them happen.");
const orange = new Netflix("Orange Is the New Black","https://akns-images.eonline.com/eol_images/Entire_Site/201869/rs_634x939-180709061638-634-oitnb-s6.ch.070918.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top","A privileged New Yorker ends up in a women's prison when a past crime catches up with her in this Emmy-winning series from the creator of \"Weeds.\"");
const godzilla = new Netflix("Godzilla Singular Point","https://upload.wikimedia.org/wikipedia/en/1/16/Godzilla_Singular_Point_Key_Visual.jpg?20210224000313","Brought together by a mysterious song, a grad student and an engineer lead the fight against an unimaginable force that may spell doom for the world.");
const innocent = new Netflix("The Innocent","https://m.media-amazon.com/images/M/MV5BYmExMGI5NDEtZjY1My00MzQ0LWI4MmUtMzdkODgxYjRhNjFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg","An accidental killing leads a man down a dark hole of intrigue and murder. Just as he finds love and freedom, one phone call brings back the nightmare.");
const bell = new Netflix("Saved by the Bell","https://m.media-amazon.com/images/M/MV5BNzEzMzM2ODc1Ml5BMl5BanBnXkFtZTcwMTg2MjAzMQ@@._V1_FMjpg_UX1000_.jpg","From middle school to college, best friends Zack, Kelly, Slater, Jessie, Screech and Lisa take on the highs and lows of life together in this hit series.");
const kim = new Netflix("Kim's Convenience","https://m.media-amazon.com/images/M/MV5BODQxMmI3ZGQtOGRlNy00MzI3LWE3ZmItOWRjM2I2YjQyYzgzXkEyXkFqcGdeQXVyMzI2MzYyNzI@._V1_QL75_UY281_CR19,0,190,281_.jpg","While running a convenience store in Toronto, members of a Korean-Canadian family deal with customers, each other and the evolving world around them.")
const monkey = new Netflix("The New Legends of Monkey","https://m.media-amazon.com/images/M/MV5BMjc4ODY2NzctOGJlNy00MjA0LTg3NzQtODBmZTgwN2QzMzliXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_FMjpg_UX1000_.jpg","A valiant girl liberates the Monkey King – a god long trapped in stone – in a quest to find seven sacred scrolls and save the world from evil.")
const generation = new Netflix("Generation 56k","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKk7sVVHuv8WzQ4ZuOMMAGejEZ0DvRxLiRwiHgJ62SMfrCHu45","A chance encounter leads two 30-somethings to remember 1998, the year their teenage hormones kicked in — and the internet changed their lives forever.");
const agent = new Netflix("Call My Agent!","https://m.media-amazon.com/images/M/MV5BMzRmYTQ2YzctNTc3YS00ZmQ2LTk3ODEtMjg5NWE1ZDkwMTg1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg","At a top Paris talent firm, agents scramble to keep their star clients happy – and their business afloat – after an unexpected crisis.");
const locked = new Netflix("Locked Up","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yYJzO14Ywj2J0oq5Rt-WDIb2sN4-HDNMCHSXppWwag&s","Manipulated into embezzling funds for her boyfriend and sentenced to prison, a naïve young woman must quickly learn to survive in a harsh new world.");
const evil = new Netflix("Beyond Evil","https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Beyond_Evil_2021.jpg/220px-Beyond_Evil_2021.jpg","As a killing resembling a cold case resurfaces in a small town, the chase for the truth falls on two policemen who each harbor secrets of their own.")
// Original titles has been turned to a array of objects
let titles = [

    squid,
    blood,
    angry,
    turning,
    money,
    wheel,
    hit,
    dead,
    movie,
    orange,
    godzilla,
    innocent,
    bell,
    kim,
    monkey,
    generation,
    agent,
    locked,
    evil,
    
];


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        // Original has been replaced with objects with their own titles and images
        let title = titles[i].gettitle();
        let imageURL = "";
        imageURL = titles[i].getimage()
    
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL,titles[i].getbullet()); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL,descrip) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";
   
    const cardbulletpoint = card.querySelector("li")
    cardbulletpoint.textContent = descrip

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

/*
    New functions that I added
*/
// Add additional titles
function Add()
{
    newtitle = prompt("Enter A new Title");
    newimage = prompt("Enter A image url");
    bulletpoint = prompt("Enter A description");
    const temp = new Netflix(newtitle,newimage,bulletpoint);
    
    titles.push(temp);
    showCards();
}
// Sorts the titles array
function sort()
{
    titles.sort(function (a,b){
        if (a.gettitle() < b.gettitle()) {
            return -1;
          }
          if (a.gettitle() > b.gettitle()) {
            return 1;
          }
          return 0;
    });
    showCards();
}

//removes the card when clicked
function remove()
{
    let cardHeader = card.querySelector("h2");
    target = cardHeader.textContent();
    alert(target);
    for (i in titles) {
        if (titles[i].gettitle() == target)
        {
            index = i; 
            found = true;
        }
    }
    titles.splice(index,index);
    showCards();
}

//Removes a card based on the title requires exact match
function removeSpecfic()
{
    target = prompt("Enter the title to remove");
    found = false;
    index = 0;
    for (i in titles) {
        if (titles[i].gettitle() == target)
        {
            index = i; 
            found = true;
        }
    }
    if(found == true)
    {
        titles.splice(index,1);
        showCards();
    }
    else
    {
        alert("Title not found");
    }
    
   
    

}

//Search looks for exact string
function search() {
    searchtarget = prompt("Enter Search target");
    found = false;
    index = 0;
    for(i in titles)
    {
        if(titles[i].gettitle() == searchtarget)
        {
            index = i;
            found = true;
        }
    }
    if(found == false)
    {
        alert("title not found");
    }
    else
    {
  
        titles.unshift(titles[index]);
        titles.splice(index,1);

    }
    showCards();
}