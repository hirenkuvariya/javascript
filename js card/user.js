// async function fatchdata(){
//     try {
//          const response =await fetch('https://jsonplaceholder.typicode.com/users');
//          const data = await response.json();
//          return data;
//     }
//     catch{
//         console.error('Error fetching data:', error);
//     }
//   }
 
//  async function rndata(){
//      const container =document.querySelector('.container');
//      const data= await fatchdata();
//      container.style.display = 'flex';
//      container.style.flexWrap = 'wrap';
//      container.style.justifyContent = 'center';
//      container.backgroundColor='gray';
//      container.style.gap = '20px';
//      data.forEach(no => {
  
 
//          const card =document.createElement('div');


//          card.classList.add('card');
//          card.style.border=" 1px solid #120808";
//          card.style.borderRadius=
//          card.style.padding= "20px";
//          card.style.width= "300px";
//          card.style.boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)";
//          card.style.backgroundColor="gray";
//          card.style.color="black";


         
//          const email = document.createElement('h3');
//          email.textContent="Email : "+no.email;
 
//          const name =document.createElement('h3');
//          name.textContent="Name : "+ no.name;
          
//          const id =document.createElement('h3');
//          id.textContent="Id : " + no.id;
 
//          const username =document.createElement('h3');
//          username.textContent="username : "+ no.username;
      
//          const address =document.createElement('h3');
//          address.textContent="address :- "+" "+ no.address.street +" , "+ no.address.suite +" , "+ no.address.city +" , "+ no.address.zipcode +" , lat : "+ no.address.geo.lat+" , lng : "+ no.address.geo.lng;
         

//          const phone =document.createElement('h3');
//          phone.textContent="phone : "+ no.phone;

//          const website =document.createElement('h3');
//          website.textContent="website : "+ no.website;
         
//          const company =document.createElement('h3');
//          company.textContent="company :- "+"name : "+ no.company.name +"catchPhrase:"+no.company.catchPhrase +"bs:"+no.company.bs;

//          card.appendChild(id);
//          card.appendChild(name);
//          card.appendChild(username);
//          card.appendChild(email);
//          card.appendChild(address);
//          card.appendChild(phone);
//          card.appendChild(website);
//          card.appendChild(company);

//          container.appendChild(card);
//      });
//  }
 
//  rndata();
 

//uparno code css no use kari ne 


async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function renderData() {
    const container = document.getElementById('card-container');
    const data = await fetchData();

    data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-2', 'mb-4','ms-4');
        card.style.backgroundColor = 'gray';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const name = document.createElement('h5');
        name.classList.add('card-title');
        name.textContent = user.name;

        const email = document.createElement('p');
        email.classList.add('card-text');
        email.textContent = 'Email:'+user.email;

        const address = document.createElement('p');
        address.classList.add('card-text');
        address.textContent = "Address:"+user.address.street + user.address.suite + user.address.city+user.address.zipcode;

        const phone = document.createElement('p');
        phone.classList.add('card-text');
        phone.textContent =" Phone:"+ user.phone;

        const website = document.createElement('p');
        website.classList.add('card-text');
        website.textContent =" Website:"+user.website;


        cardBody.appendChild(name);
        cardBody.appendChild(email);
        cardBody.appendChild(address);
        cardBody.appendChild(phone);
        cardBody.appendChild(website);

        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

renderData();

// // Media queries for responsive design
// const mediaQuery = window.matchMedia('(max-width: 768px)');

// function handleMediaQueryChange() {
//     if (mediaQuery.matches) {
//         // Adjust styles for smaller screens
//         const cards = document.querySelectorAll('.card');
//         cards.forEach(card => {
//             card.style.width = '100%'; // Set width to 100% for smaller screens
//         });
//     } else {
//         // Reset styles for larger screens
//         const cards = document.querySelectorAll('.card');
//         cards.forEach(card => {
//             card.style.width = '300px'; // Set width back to 300px for larger screens
//         });
//     }
// }

// // Initial check and add listener
// handleMediaQueryChange();
// mediaQuery.addListener(handleMediaQueryChange);