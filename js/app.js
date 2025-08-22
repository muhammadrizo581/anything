function fetchData(endpoint, callback){
    const promise = fetch(`https://dummyjson.com${endpoint}`) 
    promise 
        .then(response => {
            if(!response.ok){
                throw new Error('something went wrong')
            }
            return response.json()
        })
        .then(res => callback(res))
        .catch((err) => console.log(err))
        .finally()
}
fetchData("/users?limit=8", createUser) 

const userWrapperEl = document.querySelector(".user-wrapper")

function createUser(data){
    data?.users?.forEach((item) => {
        const cardEl = document.createElement("div")
        cardEl.className = "user-card" 

        cardEl.innerHTML = `
            <div class="user-card__image">
                <img loading="lazy" src="./assets/image.jpeg" alt="">
            </div>
            <div class="user-card__body">
                <h3>${item.firstName}, ${item.lastName}</h3>                
                <p>${item.age} years</p>
                <strong>${item.email}</strong>
            </div>
        `
        userWrapperEl.appendChild(cardEl)  
    })
}
