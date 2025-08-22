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

fetchData("/comments?limit=12", commentUser)

const commentWrapperEl = document.querySelector(".comments-wrapper");

function commentUser(data){
  data?.comments?.forEach((item) => {
    const cardEl = document.createElement("div");
    cardEl.className = "comments-card";

    cardEl.innerHTML = `
      <div class="comments-card__body">
        <h3>#${item.id}</h3>
        <p>text: ${item.body}</p>
        <strong>Likes: ${item.likes}</strong>
        <p class="username">from: ${item.user.username}</p>
      </div>
    `;
    commentWrapperEl.appendChild(cardEl);
  });
}
