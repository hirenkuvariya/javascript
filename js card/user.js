async function fatchdata(){
    try {
         const response =await fetch('https://jsonplaceholder.typicode.com/users');
         const data = await response.json();
         return data;
    }
    catch{
        console.error('Error fetching data:', error);
    }
  }
 
 async function rndata(){
     const container =document.querySelector('.container');
     const data= await fatchdata();
 
     data.forEach(no => {
  
 
         const card =document.createElement('div');
         card.classList.add('card');
         
         const email = document.createElement('p');
         email.textContent="Email : "+no.email;
 
         const name =document.createElement('p');
         name.textContent="Name : "+ no.name;
          
         const id =document.createElement('p');
         id.textContent="Id : " + no.id;
 
         const username =document.createElement('p');
         username.textContent="username : "+ no.username;
      
         const address =document.createElement('p');
         address.textContent="address :- "+" "+ no.address.street +" , "+ no.address.suite +" , "+ no.address.city +" , "+ no.address.zipcode +" , lat : "+ no.address.geo.lat+" , lng : "+ no.address.geo.lng;

         const phone =document.createElement('p');
         phone.textContent="phone : "+ no.phone;

         const website =document.createElement('p');
         website.textContent="website : "+ no.website;
         
         const company =document.createElement('p');
         company.textContent="company :- "+"name : "+ no.company.name +"catchPhrase:"+no.company.catchPhrase +"bs:"+no.company.bs;

         card.appendChild(id);
         card.appendChild(name);
         card.appendChild(username);
         card.appendChild(email);
         card.appendChild(address);
         card.appendChild(phone);
         card.appendChild(website);
         card.appendChild(company);

         container.appendChild(card);
     });
 }
 
 rndata();