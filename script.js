let githubUrl ='https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'

// let root = document.getElementById

let myBox = document.getElementById("root")
async function showData(){
    let res = await fetch (githubUrl)
    let data = await res.json()
    console.log(data)
    myBox.innerHTML = data.map((item) => {
        return `<div class="card">
        <img src=${item.author.avatar_url} alt="avatar"> 
        <p class="para"> ${item.author.login}</p>
        </div>`
    }).join('')
    
}
showData()