 async function fatchdata(){
   try {
        const response =await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
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
        
        const email = document.createElement('h3');
        email.textContent="Email : "+no.email;

        const name =document.createElement('h2');
        name.textContent="Name : "+ no.name;
         
        const id =document.createElement('h3');
        id.textContent="Id : " + no.id;

        const body =document.createElement('h3');
        body.textContent="Other : "+ no.body;

        card.appendChild(id);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(body);
     
        
        container.appendChild(card);
    });
}

rndata();

