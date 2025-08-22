function fetchData(endpoint, callback) {
  const promise = fetch(`https://dummyjson.com${endpoint}`)
  promise
    .then(response => {
      if (!response.ok) {
        throw new Error('something went wrong')
      }
      return response.json()
    })
    .then(res => callback(res))
    .catch((err) => console.log(err))
    .finally()
}

fetchData("/posts?limit=8", postUser)

const postWrapperEl = document.querySelector(".posts-wrapper")

function postUser(data) {
  data?.posts?.forEach((item) => {
    const cardEl = document.createElement("div")
    cardEl.className = "posts-card"

    cardEl.innerHTML = `
      <div class="posts-card__body">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <strong>Reactions:Likes: ${item.reactions.likes}</strong>
        <strong>Reactions:Dislikes: ${item.reactions.dislikes}</strong>
      </div>
    `
    postWrapperEl.appendChild(cardEl)
  })
}
