
const projects = []


export default function handleProjectList() {
    const listContainer = document.querySelector('.content-lists > ul')
    listContainer.innerHTML = ''
    for(let i = 0; i < projects.length; i++) {
    projects[i].generateIcon()
   }
}
export {projects}