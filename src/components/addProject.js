import generateAddProjectDialog from "./addProjectDialog"
export default function addProject() {
    addProjectButton.addEventListener('click', ()=> {
        generateAddProjectDialog()
    })
}

