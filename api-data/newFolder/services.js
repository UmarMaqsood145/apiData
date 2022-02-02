const services = [
    {
        id: 1,
        technology: "web",
        title: "Web Design",
        description: "Web design is the process of planning, conceptualizing, and arranging content online. ",
        imageUrl: "./images/webDesign.jpg",
        details: "https://www.pagecloud.com/blog/web-design-guide"
    },
    {
        id: 2,
        technology: "web",
        title: "Web Development",
        description: "Web development is the work involved in developing a website for the Internet (World Wide Web)",
        imageUrl: "./images/webDevelopment.jpeg",
        details: "https://en.wikipedia.org/wiki/Web_development"
    },
    {
        id: 3,
        technology: "web",
        title: "Graphic Design",
        description: "Graphic design is a craft where professionals create visual content to communicate messages. ",
        imageUrl: "./images/graphic.jpg",
        details: "https://www.interaction-design.org/literature/topics/graphic-design#:~:text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience."
    },
    {
        id: 4,
        title: "Content Writing",
        description: "Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.",
        imageUrl: "./images/contentwriting.jpg",
        details: "https://www.interaction-design.org/literature/topics/graphic-design#:~:text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience."
    },
    {
        id: 5,
        title: "Seo",
        common: "digital",
        description: "SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration.",
        imageUrl: "./images/seo.jpg",
        details: "https://www.interaction-design.org/literature/topics/graphic-design#:~:text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience."
    },
    {
        id: 6,
        title: "Digital Marketing",
        common: "digital",
        description: "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication",
        imageUrl: "./images/digital.jpg",
        details: "https://www.interaction-design.org/literature/topics/graphic-design#:~:text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience."
    },
    {
        id: 7,
        title: "Android Development",
        description: "An android developer uses analytical skills and computer training to develop systems for android devices.",
        imageUrl: "./images/android.jpg",
        details: "https://www.interaction-design.org/literature/topics/graphic-design#:~:text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience."
    },
    {
        id: 8,
        title: "eCommerce",
        description: "Ecommerce is the buying and selling of goods and services over the Internet. It is conducted over computers, tablets, smartphones, and other smart devices.",
        imageUrl: "./images/eco.jpg",
        details: "https://www.interaction-design.org/literature/topics/graphic-design#:~:text=Graphic%20design%20is%20a%20craft,to%20optimize%20the%20user%20experience."
    }
]

// Map Method
const cardsContainer =  document.querySelector('.cardsContainer');

function apiData(services) {
   let cards =  services.map((service)=>{
       return `
        <div class= "cards">
            <img src=${service.imageUrl} alt="Image Available Soon" />
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href=${service.details} target="_blank" class="btn">Read More</a>
        </div>`
    });
    cardsContainer.innerHTML = cards.join("");
}
apiData(services);


// allShow Btn
function allShow(){
    let cards =  services.map((service)=>{
        return `
         <div class= "cards">
             <img src=${service.imageUrl} alt="Image Available Soon" />
             <h3>${service.title}</h3>
             <p>${service.description}</p>
             <a href=${service.details} target="_blank" class="btn">Read More</a>
         </div> `
     });
     cardsContainer.innerHTML = cards.join("");
}


// Filter Method webBtn
function webShow() {
    const filteredServices = services.filter((service) => service.technology === "web");
    let displayCards = '';
    filteredServices.map((service) => {
      const cards = `
      <div class= "cards">
          <img src=${service.imageUrl} alt="Image Available Soon" />
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <a href=${service.details} target="_blank" class="btn">Read More</a>
      </div> `;
      displayCards += cards;
    });
    cardsContainer.innerHTML = displayCards;
}


// filter method Marketing
function marketing() {

    const filteredServices = services.filter((service) => service.common === "digital");
    let displayCards = '';
    filteredServices.map((service) => {
      const cards = `
      <div class= "cards">
          <img src=${service.imageUrl} alt="Image Available Soon" />
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <a href=${service.details} target="_blank" class="btn">Read More</a>
      </div> `;
      displayCards += cards;
    });
    cardsContainer.innerHTML = displayCards;
}


// find Method contentBtn
function contentShow(){

    services.find((service)=>{
        if(service.title === "Content Writing"){
        let cards =  `
        <div class= "cards">
            <img src=${service.imageUrl} alt="Image Available Soon" />
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <a href=${service.details} target="_blank" class="btn">Read More</a>
        </div> `
        cardsContainer.innerHTML = cards;
    }
    });
}


// Search Filter
function searchBar(elem) {
    const userInput = elem.value;
    const searchServices = services.filter((data) => data.title.toLowerCase().includes(userInput.toLowerCase()));
    apiData(searchServices);
}










// For Loop Method
// function apiData(services) {
//     for(let n = 0; n<= services.length; n++){
//         let cards = 
//         `
//         <div class= "cards">
//             <img src=${services[n].imageUrl} alt="Image Available Soon" />
//             <h3>${services[n].title}</h3>
//             <p>${services[n].description}</p>
//             <a href=${services[n].details} class="btn">Read More</a>
//         </div>
//         `
//         cardsContainer.innerHTML += cards;
//     }
// }

// apiData(services);


// While Loop Method
// function apiData(services) {
//     let n = 0;
//     while( n<=services.length ){
//         let cards = 
//         `
//         <div class= "cards">
//             <img src=${services[n].imageUrl} alt="Image Available Soon" />
//             <h3>${services[n].title}</h3>
//             <p>${services[n].description}</p>
//             <a href=${services[n].details} class="btn">Read More</a>
//         </div>
//         `
//         cardsContainer.innerHTML += cards;
//         n++;
//     }
// }

// apiData(services);


// Do While Loop Method
// function apiData(services) {
//     let n = 0;
//     do{
//         let cards = 
//         `
//         <div class= "cards">
//             <img src=${services[n].imageUrl} alt="Image Available Soon" />
//             <h3>${services[n].title}</h3>
//             <p>${services[n].description}</p>
//             <a href=${services[n].details} class="btn">Read More</a>
//         </div>
//         `
//         cardsContainer.innerHTML += cards;
//         n++;
//     }
//     while(n<services.length);
// }

// apiData(services);