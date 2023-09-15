import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;



async function getData(){
 const res = await fetch("https://api.github.com/users/Vipin-Devan")
 const data = await res.json()
return data
}

getData().then(res => {
  document.getElementById("app").innerHTML = `
  <img src=${res.avatar_url} />`
})
