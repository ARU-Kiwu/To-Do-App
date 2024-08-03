import { add, max } from "date-fns";
import stringToHTML from "./stringToHTML";
import ProjectPage from "./generateProjectPage";
import handleProjectList, { projects } from "./projects";
import returnIcon from "./generateIcon";

let icon = undefined;

export default function generateAddProjectDialog() {
    const body = document.querySelector('body')
    const dialog = createDialogElement()
    dialog.classList.add('addProject')
    dialog.setAttribute('open', 'true')
    body.append(dialog)

    createDialogElement()

    function createDialogElement() {
        const dialog = document.createElement("dialog");
        dialog.classList.add("addProject");
        dialog.setAttribute("open", "true");

        const wrapper = document.createElement("div");
        

        //Create Modal title
        const modalTitle = createModalTitleSection(dialog);
        wrapper.append(modalTitle)

        //Creates the section where you input the project's title
        const createTitle = createAddTitleSection();
        wrapper.append(createTitle)

        //Creates the buttons section
        const buttonsSection = createButtonsSection(dialog);
        wrapper.append(buttonsSection)
        //Append wrapper to the dialog
        dialog.append(wrapper)

        
        return dialog
    }

}

function generateInputSection(){
    const inputContainer = document.createElement('div')
    inputContainer.classList.add('title-input')

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'list title')
    input.setAttribute('maxlength', '25')
    inputContainer.append(input)

     // Input placeholder text
    const inputPlaceholder = document.createElement('span')
    inputPlaceholder.innerText = 'Title'
    inputPlaceholder.classList.add('input-placeholder')
    inputContainer.append(inputPlaceholder)

    // Title length counter
    const counterContainer = document.createElement('div')
    const counter = document.createElement('span')
    counter.innerText = '0'
    counterContainer.append(counter)
    input.addEventListener('input', ()=> {
        input.value.length === 25 ? counter.style.color = 'red' : counter.style.color = 'white';
        counter.innerHTML = input.value.length
    })
    input.setAttribute('id', 'projectTitle')
    inputContainer.append(counterContainer)


    const maxCounter = document.createElement('span')
    maxCounter.innerText = '/25'
    counterContainer.append(maxCounter)

    return inputContainer

}

function createModalTitleSection(dialog) {
    const modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');
   
   
    const title = document.createElement('p');
    //Set the modal tile
    title.innerText = 'Add a to do list'
    modalTitle.append(title)

    //Create the close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = returnIcon('close')
    
    // Add functionality to the button

    closeButton.addEventListener('click', ()=> {
        dialog.remove()
    })
    modalTitle.append(closeButton)

    return modalTitle
}

function createAddTitleSection() {
    const addTitleSection = document.createElement('div')
    addTitleSection.classList.add('add-title')

    // Creates the icon selection section
    const iconSelector = document.createElement('div')
    iconSelector.classList.add('icon-selector')

    iconSelector.innerHTML = returnIcon('defaultProjectIcon')
    addTitleSection.append(iconSelector)

    const iconSelectionSection = generateIconSelectionContainer(iconSelector)
    addTitleSection.appendChild(iconSelectionSection)

    const inputSection = generateInputSection()
    addTitleSection.append(inputSection)
    return addTitleSection
}

function generateIconSelectionContainer(selectIconContainer) {
    
    const iconsContainer = document.createElement('div')
    iconsContainer.classList.add('icons')
    selectIconContainer.addEventListener('click', ()=> iconsContainer.style.display = 'grid')


    //Project Icons
    const defaultIcon = returnIcon('defaultProjectIcon')
    const starIcon = returnIcon('star')
    const gymIcon = returnIcon('gym')
    const schoolIcon = returnIcon('school')
    const penIcon = returnIcon('pen')
    const flowerIcon = returnIcon('flower')
    const travelIcon = returnIcon('travel')
    const shoppingIcon = returnIcon('shop')
    const ideaIcon  = returnIcon('idea')
    const fileIcon = returnIcon('file')
    const bookmarkIcon = returnIcon('bookmark')
    const movieIcon = returnIcon('movie')

    const icons = [defaultIcon, starIcon, gymIcon, schoolIcon, shoppingIcon, penIcon, flowerIcon, ideaIcon,travelIcon ,fileIcon, bookmarkIcon, movieIcon]
    icons.forEach(icon => {
        const iconWrapper = document.createElement('div')
        iconWrapper.addEventListener('click', ()=> {
            selectIconContainer.innerHTML = icon
            iconsContainer.style.display = 'none'
        })
        iconWrapper.classList.add('icon')
        iconWrapper.innerHTML = icon
        iconsContainer.append(iconWrapper)
    })
    
    return iconsContainer
}

function createButtonsSection(dialog){ 
    const buttonWrapper = document.createElement('div')
    buttonWrapper.classList.add('buttons')

    const cancelButton = document.createElement('button')
    cancelButton.innerText = 'Cancel'
    cancelButton.addEventListener('click', ()=> dialog.remove())
    buttonWrapper.append(cancelButton)


    // Add project
    const createListButton  = document.createElement('button')
    createListButton.addEventListener('click', ()=> {
        const title = document.querySelector('#projectTitle')
        const icon = generateProjectIcon()
        const newProject = new ProjectPage(icon, title.value);
        projects.push(newProject);
        handleProjectList()
        console.log(projects)
        dialog.remove()
        return icon
    })
    createListButton.innerText = 'Create List'
    buttonWrapper.append(createListButton)
    

    return buttonWrapper
}

function generateProjectIcon(){
    const projectIcon = document.querySelector('.icon-selector')
    icon = projectIcon.querySelector('svg')
    return icon
}

export { icon }