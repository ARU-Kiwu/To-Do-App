import returnIcon from "./generateIcon"

export default function generateDefaultPage() {
    const parentContainer = document.querySelector('.list-page')
    
    const homepageWrapper = document.createElement('div')
    homepageWrapper.classList.add('homepage')
    
    const title = document.createElement('h2')
    title.innerText = 'Atodomize'

    const description = document.createElement('p')
    description.innerHTML = ` Create a new list by clicking the + button or select <br>
    an existing one to start adding your tasks.`

    homepageWrapper.appendChild(title)
    homepageWrapper.appendChild(description)
    parentContainer.append(homepageWrapper)
}