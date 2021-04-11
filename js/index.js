const height = window.innerHeight
const width = window.innerWidth

const dividers = document.querySelectorAll('.divider')
const sections = document.querySelectorAll('section')

dividers.forEach(divider => divider.style.setProperty('--divider-width', width))
sections.forEach(section => {
	section.style.setProperty('--section-height', height)
	section.style.setProperty('--section-width', width)
})