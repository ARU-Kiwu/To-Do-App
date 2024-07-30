import { add, max } from "date-fns";
import stringToHTML from "./stringToHTML";

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

        
    generateProjectIcon()
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

function returnIcon(type) {
    const icons = {
        close:`
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M40.7206 37.4042C41.1609 37.8445 41.4083 38.4417 41.4083 39.0644C41.4083 39.687 41.1609 40.2842 40.7206 40.7245C40.2803 41.1648 39.6831 41.4122 39.0605 41.4122C38.4378 41.4122 37.8406 41.1648 37.4003 40.7245L24.9999 28.3202L12.5956 40.7206C12.1553 41.1609 11.5581 41.4083 10.9355 41.4083C10.3128 41.4083 9.71561 41.1609 9.27531 40.7206C8.83501 40.2803 8.58765 39.6831 8.58765 39.0605C8.58765 38.4378 8.83501 37.8406 9.27531 37.4003L21.6796 24.9999L9.27921 12.5956C8.83891 12.1553 8.59155 11.5581 8.59155 10.9355C8.59155 10.3128 8.83891 9.71561 9.27921 9.27531C9.71951 8.835 10.3167 8.58765 10.9394 8.58765C11.562 8.58765 12.1592 8.835 12.5995 9.27531L24.9999 21.6796L37.4042 9.27335C37.8445 8.83305 38.4417 8.58569 39.0644 8.58569C39.687 8.58569 40.2842 8.83305 40.7245 9.27335C41.1648 9.71365 41.4122 10.3108 41.4122 10.9335C41.4122 11.5562 41.1648 12.1534 40.7245 12.5937L28.3202 24.9999L40.7206 37.4042Z"
        fill="black" />
        </svg>
        `,
        defaultProjectIcon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19.5 9C19.2016 9 18.9155 8.88147 18.7045 8.6705C18.4935 8.45952 18.375 8.17337 18.375 7.875V5.625H16.125C15.8266 5.625 15.5405 5.50647 15.3295 5.2955C15.1185 5.08452 15 4.79837 15 4.5C15 4.20163 15.1185 3.91548 15.3295 3.7045C15.5405 3.49353 15.8266 3.375 16.125 3.375H18.375V1.125C18.375 0.826631 18.4935 0.540483 18.7045 0.329505C18.9155 0.118526 19.2016 0 19.5 0C19.7984 0 20.0845 0.118526 20.2955 0.329505C20.5065 0.540483 20.625 0.826631 20.625 1.125V3.375H22.875C23.1734 3.375 23.4595 3.49353 23.6705 3.7045C23.8815 3.91548 24 4.20163 24 4.5C24 4.79837 23.8815 5.08452 23.6705 5.2955C23.4595 5.50647 23.1734 5.625 22.875 5.625H20.625V7.875C20.625 8.17337 20.5065 8.45952 20.2955 8.6705C20.0845 8.88147 19.7984 9 19.5 9ZM4.5 20.25C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H10.875C11.1734 3.75 11.4595 3.63147 11.6705 3.4205C11.8815 3.20952 12 2.92337 12 2.625C12 2.32663 11.8815 2.04048 11.6705 1.8295C11.4595 1.61853 11.1734 1.5 10.875 1.5H4.5C3.70435 1.5 2.94129 1.81607 2.37868 2.37868C1.81607 2.94129 1.5 3.70435 1.5 4.5V19.5C1.5 20.2956 1.81607 21.0587 2.37868 21.6213C2.94129 22.1839 3.70435 22.5 4.5 22.5H19.5C20.2956 22.5 21.0587 22.1839 21.6213 21.6213C22.1839 21.0587 22.5 20.2956 22.5 19.5V13.125C22.5 12.8266 22.3815 12.5405 22.1705 12.3295C21.9595 12.1185 21.6734 12 21.375 12C21.0766 12 20.7905 12.1185 20.5795 12.3295C20.3685 12.5405 20.25 12.8266 20.25 13.125V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5Z"
                     fill="black" />
                 </svg>
        `,
        star:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z" fill="black"/>
</svg>

        `,
        gym:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 14V10C22 9.068 22 8.602 21.848 8.235C21.7475 7.99218 21.6001 7.77155 21.4143 7.58572C21.2284 7.3999 21.0078 7.25251 20.765 7.152C20.398 7 19.932 7 19 7C18.068 7 17.602 7 17.235 7.152C16.9922 7.25251 16.7716 7.3999 16.5857 7.58572C16.3999 7.77155 16.2525 7.99218 16.152 8.235C16 8.602 16 9.568 16 10.5H8C8 9.568 8 8.602 7.848 8.235C7.74749 7.99218 7.6001 7.77155 7.41428 7.58572C7.22845 7.3999 7.00782 7.25251 6.765 7.152C6.398 7 5.932 7 5 7C4.068 7 3.602 7 3.235 7.152C2.99218 7.25251 2.77155 7.3999 2.58572 7.58572C2.3999 7.77155 2.25251 7.99218 2.152 8.235C2 8.602 2 9.068 2 10V14C2 14.932 2 15.398 2.152 15.765C2.25251 16.0078 2.3999 16.2284 2.58572 16.4143C2.77155 16.6001 2.99218 16.7475 3.235 16.848C3.602 17 4.068 17 5 17C5.932 17 6.398 17 6.765 16.848C7.00782 16.7475 7.22845 16.6001 7.41428 16.4143C7.6001 16.2284 7.74749 16.0078 7.848 15.765C8 15.398 8 14.432 8 13.5H16C16 14.432 16 15.398 16.152 15.765C16.2525 16.0078 16.3999 16.2284 16.5857 16.4143C16.7716 16.6001 16.9922 16.7475 17.235 16.848C17.602 17 18.068 17 19 17C19.932 17 20.398 17 20.765 16.848C21.0078 16.7475 21.2284 16.6001 21.4143 16.4143C21.6001 16.2284 21.7475 16.0078 21.848 15.765C22 15.398 22 14.932 22 14Z" fill="black"/>
</svg>

        `,
        school:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 17V10.1L12 15L1 9L12 3L23 9V17H21ZM12 21L5 17.2V12.2L12 16L19 12.2V17.2L12 21Z" fill="black"/>
</svg>

        `,
        shop:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="black"/>
</svg>

        `,
        pen:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.71 7.04C20.37 7.38 20.04 7.71 20.03 8.04C20 8.36 20.34 8.69 20.66 9C21.14 9.5 21.61 9.95 21.59 10.44C21.57 10.93 21.06 11.44 20.55 11.94L16.42 16.08L15 14.66L19.25 10.42L18.29 9.46L16.87 10.87L13.12 7.12L16.96 3.29C17.35 2.9 18 2.9 18.37 3.29L20.71 5.63C21.1 6 21.1 6.65 20.71 7.04ZM3 17.25L12.56 7.68L16.31 11.43L6.75 21H3V17.25Z" fill="black"/>
</svg>

        `,
        flower:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8002 12.8C20.8002 18.096 17.2962 22.4 12.0002 22.4C6.7042 22.4 3.2002 18.096 3.2002 12.8C4.96785 12.8149 6.68719 13.3787 8.12039 14.4135C9.55359 15.4483 10.6298 16.9028 11.2002 18.576V11.2H7.2002C6.56368 11.2 5.95323 10.9472 5.50314 10.4971C5.05305 10.047 4.8002 9.43653 4.8002 8.80001V4.00001C4.8002 3.8321 4.85303 3.66845 4.9512 3.53224C5.04938 3.39603 5.18792 3.29416 5.34721 3.24106C5.5065 3.18796 5.67846 3.18633 5.83873 3.2364C5.999 3.28646 6.13945 3.38568 6.2402 3.52001L8.6882 6.72001L11.3282 1.92001C11.4007 1.80773 11.5002 1.71541 11.6176 1.65149C11.735 1.58757 11.8665 1.55408 12.0002 1.55408C12.1339 1.55408 12.2654 1.58757 12.3828 1.65149C12.5002 1.71541 12.5997 1.80773 12.6722 1.92001L15.3122 6.72001L17.7602 3.52001C17.8609 3.38568 18.0014 3.28646 18.1617 3.2364C18.3219 3.18633 18.4939 3.18796 18.6532 3.24106C18.8125 3.29416 18.951 3.39603 19.0492 3.53224C19.1474 3.66845 19.2002 3.8321 19.2002 4.00001V8.80001C19.2002 9.43653 18.9473 10.047 18.4973 10.4971C18.0472 10.9472 17.4367 11.2 16.8002 11.2H12.8002V18.576C13.3706 16.9028 14.4468 15.4483 15.88 14.4135C17.3132 13.3787 19.0325 12.8149 20.8002 12.8Z" fill="black"/>
</svg>

        `,
        travel:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9251 21.125L7.4501 16.525L2.8501 14.05L4.6251 12.3L8.2501 12.925L10.8001 10.375L2.8751 7L4.9751 4.85L14.6001 6.55L17.7001 3.45C18.0834 3.06667 18.5584 2.875 19.1251 2.875C19.6918 2.875 20.1668 3.06667 20.5501 3.45C20.9334 3.83333 21.1251 4.304 21.1251 4.862C21.1251 5.42 20.9334 5.891 20.5501 6.275L17.4251 9.4L19.1251 19L17.0001 21.125L13.6001 13.2L11.0501 15.75L11.7001 19.35L9.9251 21.125Z" fill="black"/>
</svg>

        `,
        idea:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V14.74C17.81 13.47 19 11.38 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2ZM9 21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22H14C14.2652 22 14.5196 21.8946 14.7071 21.7071C14.8946 21.5196 15 21.2652 15 21V20H9V21Z" fill="black"/>
</svg>

        `,
        file:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9V3.5L18.5 9M6 2C4.89 2 4 2.89 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2H6Z" fill="black"/>
</svg>

        `,
        bookmark:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21V5C5 4.45 5.196 3.97933 5.588 3.588C5.98 3.19667 6.45067 3.00067 7 3H17C17.55 3 18.021 3.196 18.413 3.588C18.805 3.98 19.0007 4.45067 19 5V21L12 18L5 21Z" fill="black"/>
</svg>

        `,
        movie:`
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L6 8H9L7 4H9L11 8H14L12 4H14L16 8H19L17 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4Z" fill="black"/>
</svg>

        `,
     
    }

    return icons[type]
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
        icon = generateProjectIcon()
        dialog.remove()
console.log(icon)

        return icon
    })
    createListButton.innerText = 'Create List'
    buttonWrapper.append(createListButton)
    

    return buttonWrapper
}

function generateProjectIcon(){
    const iconProject = document.querySelector('.icon-selector')
    return iconProject
}

export { icon }