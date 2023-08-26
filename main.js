let MoviesList = document.querySelector('.MoviesList'),
btn = document.querySelector('.btn'),
input= document.querySelector('#Search'),
progress= document.querySelector('.progress')



fetch(`http://www.omdbapi.com/?s=Wednesday&apikey=3bf3e15`)
.then(res=> res.json())
.then(data=> {
    progress.style.display = 'none'
    data.Search.map(item=> {
    let img = document.createElement('img')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let card = document.createElement('div')
    card.classList.add('card')
    img.src = item.Poster
    h1.innerHTML = item.Title
    h2.innerHTML = item.Year
    card.appendChild(img)
    card.appendChild(h1)
    card.appendChild(h2) 
    MoviesList.appendChild(card)
})
})

const btnClick = (e)=>{
       if(input.value != ''){
  
    e.preventDefault()
        for(let item of MoviesList.children){
            MoviesList.removeChild(item)
        }
        for(let item of MoviesList.children){
            MoviesList.removeChild(item)
        }
        for(let item of MoviesList.children){
            MoviesList.removeChild(item)
        }
        for(let item of MoviesList.children){
            MoviesList.removeChild(item)
        }
        progress.style.display = 'block'
        fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=3bf3e15`)
    .then(res=> res.json())
    .then(data=>{
     progress.style.display = 'none'
     data.Search.map(item=> {
        let img = document.createElement('img')
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h2')
        let card = document.createElement('div')
        card.classList.add('card')
        img.src = item.Poster
        h1.innerHTML = item.Title
        h2.innerHTML = item.Year
        card.appendChild(img)
        card.appendChild(h1)
        card.appendChild(h2) 
        MoviesList.appendChild(card)
    
     })
     })
     .catch(()=> {
        progress.style.display = 'none'
        let h1=document.createElement('h1')
        h1.innerHTML= 'Not Found!'
        // matchMedia
// MediaElementAudioSourceNode
        h1.style.fontSize='100px'
        h1.style.color = 'blue'
        MoviesList.appendChild(h1)
        
    })
}} 

btn.addEventListener('click',btnClick)

const inputValue=(n)=>{
    input.value=n.innerHTML
}