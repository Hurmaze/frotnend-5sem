let button = document.querySelector('.button');
button.addEventListener('click', getResponse);

let uri = 'https://randomuser.me/api?results=5';

async function getResponse() {
    let fail_message = document.querySelector('.fail_message');
    fail_message.innerHTML = '';
    let result = document.querySelector('.result');
    result.innerHTML = '';

    fetch(uri)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                fail_message.innerHTML = 'Something went wrong...';
                throw Error;
            }
        })
        .then(response => {
                for (let i = 0; i < 5; i++) {
                    result.innerHTML += `
                    <div class>
                        <div class="person_image">
                            <img src="${response.results[i].picture.large}" alt="" width="300px" height="200px">
                         </div>
                        <div class="about">
                            Country: ${response.results[i].location.country}
                        </div>
                        <div class="about">
                            Email: ${response.results[i].email}
                        </div> 
                        <div class="about">
                            Phone: ${response.results[i].phone}
                        </div> 
                        <div class="about">
                            Coordinates: <br> 
                            latitude: ${response.results[i].location.coordinates.latitude} <br>
                            longitude: ${response.results[i].location.coordinates.longitude}
                        </div>  
                    </div>
                    `
                }
            }
        ).catch(error => {
        fail_message.innerHTML = 'Something went wrong...';
        console.log(error);
    })
}