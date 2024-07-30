export default function stringToHTML(input) {
    const template = document.createElement('template');

    template.innerHTML = input.trim()

    return template.content.firstElementChild
}