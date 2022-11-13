let button = document.querySelector('.button');
button.addEventListener('click', getResponse);

let uri = 'https://randomuser.me/api?results=5';

async function getResponse() {
    let fail_message = document.querySelector('.fail_message');
    fail_message.innerHTML = '';
    let result = document.querySelector('.result');
    result.innerHTML = '';

    for (let index = 0; index < 5; index++) {
        fetch(uri)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    fail_message.innerHTML = 'Something went wrong...';
                    throw Error;
                }
            })
            .then(response =>
                result.innerHTML += `
                    <div class>
                        <div class="person_image">
                            <img src="${response.results[0].picture.large}" alt="" width="300px" height="200px">
                         </div>
                        <div class="about">
                            <div class="inf">Cell: ${response.results[0].cell}</div>
                        </div>
                        <div class="about">
                            <div class="inf">City: ${response.results[0].location.city}</div>
                        </div> 
                        <div class="about">
                            <div class="inf">Country: ${response.results[0].location.country}</div>
                        </div> 
                        <div class="about">
                            <div class="inf">Postcode: </br> ${response.results[0].location.postcode}</div>
                        </div>  
                    </div>
                    `
            ).catch(error => {
            fail_message.innerHTML = 'Something went wrong...';
            console.log(error);
        })
    }
}