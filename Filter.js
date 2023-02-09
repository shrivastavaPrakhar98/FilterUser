// https://api.github.com/users 
let users1 = document.querySelector('.user-list');
let userInput = document.querySelector('#user');

const userArr = [];

const getData = async () => {
    try {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        //console.log(finalres);

        if (data) {
            users1.innerHTML = "";
        }


        data.map((users) => {
            const li = document.createElement('li');

            userArr.push(li);

            li.insertAdjacentHTML('afterbegin',
                `
         <div class="user-data">
                    <img src=${users.avatar_url} alt="">
                    <div>
                        <p> ${users.login} </p>
                        <a  target="blank" href=${users.html_url}>${users.html_url}</a>
                    </div>
                </div>
         `
            )

            users1.appendChild(li);
        })




    } catch (error) {
        console.log(error)
    }
}

userInput.addEventListener('input', (e) => {
    let val = e.target.value;

    userArr.filter((ele)=>{
     ele.innerText.toLowerCase().includes(val.toLowerCase())?ele.classList.remove('hide'):ele.classList.add('hide')
    })


})



getData();


