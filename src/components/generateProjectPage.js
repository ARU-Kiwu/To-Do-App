import { icon } from "./addProjectDialog"
import returnIcon from "./generateIcon"
import handleProjectList from "./projects"

 export default class ProjectPage {
    constructor(icon, title) {
        this.icon = icon
        this.title = title
    }

    static toDos = []
   generateIcon() {
        const listContainer = document.querySelector('.content-lists > ul')

        const listItem = document.createElement('li')
        listItem.classList.add('projectIcon')
        const projectTitle = document.createElement('span')
        const projectIcon = document.createElement('div')
        projectIcon.append(this.icon)
    
        //Sets default title if no title is set
        this.title.length === 0 ? this.title = 'No Title Set': this.title = this.title
        projectTitle.innerText = `${this.title}`
        projectTitle.classList.add('tooltip')
        listItem.append(projectIcon)
        listItem.append(projectTitle)
        listContainer.append(listItem)

        listItem.addEventListener('click', ()=> {
            const appendingElement = document.querySelector('.list-page')
            appendingElement.innerHTML = ''
            this.generateProjectPage()
        })
    }

    generateProjectPage() {
        const appendingElement = document.querySelector('.list-page')
        const sectionWrapper = document.createElement('div')
        sectionWrapper.classList.add('project')

        function generateHeader(title) {
            const projectHeader = document.createElement('div')
            projectHeader.classList.add('project-header')
            
            const titleContainer = document.createElement('div')
            titleContainer.classList.add('title')
            const h2 = document.createElement('h2')
            h2.innerHTML = `${title}`
            titleContainer.append(h2)

            const buttonsWrapper = document.createElement('div')
            const createButton = document.createElement('div')
            createButton.innerHTML = returnIcon('create')   
            buttonsWrapper.append(createButton)

            const deleteButton = document.createElement('div')
            deleteButton.innerHTML = returnIcon('delete')
            buttonsWrapper.append(deleteButton)

            projectHeader.append(titleContainer)
            projectHeader.append(buttonsWrapper)

            return projectHeader
        }

        function generateFilterButtons() {
            const buttonsWrapper = document.createElement('div')
            buttonsWrapper.classList.add('project-buttons')

            const toDo = document.createElement('button')
            toDo.innerText = 'To-do'

            const completed = document.createElement('button')
            completed.innerText = 'Completed'

            buttonsWrapper.append(toDo)
            buttonsWrapper.append(completed)

            return buttonsWrapper
        }

        const header = generateHeader(this.title) 
        const filterButtons = generateFilterButtons()
        const hr = document.createElement('hr')
        const projectContentSection = document.createElement('div')
        projectContentSection.classList.add('project-content')

        sectionWrapper.append(header)
        sectionWrapper.append(filterButtons)
        sectionWrapper.append(hr)
        sectionWrapper.append(projectContentSection)
        
        appendingElement.append(sectionWrapper)
    }
}