// console.log('hello world')

const addMovie = (evt) => {
    evt.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    
    movie.appendChild(movieTitle)
   

    

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent =("X")
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    inputField.value = ''
}
const crossOffMovie = (evt) => {
    evt.target.classList.toggle(".checked")
}

const deleteMovie = (evt) => {
    evt.target.parentNode.remove()
}

document.querySelector('form').addEventListener('submit',addMovie)
