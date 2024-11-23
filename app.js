

const div = document.querySelector("#container");
const innn = document.querySelector("#inn");



function submit() {  
 const username = innn.value
fetch(`https://api.github.com/users/${username}`)
.then((res) =>res.json()

)
.then((data)=>{
  console.log(data); 
  div.innerHTML += `
  <h1 class="mx-5 my-2 py-2 px 5">NAME :${data.name}</h1>
  <h1 class="mx-5 my-2 py-2 px 5">BIO : ${data.bio}</h1>
  <img src="${data.avatar_url}" alt="" srcset="">`
})
.catch((err)=>{
  console.log(err);
  })


}












// const div = document.querySelector("#container");
// const innn = document.querySelector("#inn");



// function submit() {  
//  const username = innn.value
// fetch(`https://api.github.com/users/${username}`)
// .then((res) =>res.json()

// )
// .then((data)=>{
//   console.log(data); 
//   div.innerHTML += `
//   <h1 class="mx-5 my-2 py-2 px 5">NAME :${data.name}</h1>
//   <h1 class="mx-5 my-2 py-2 px 5">BIO : ${data.bio}</h1>
//   <img src="${data.avatar_url}" alt="" srcset="">`
// })
// .catch((err)=>{
//   console.log(err);
//   })


// }