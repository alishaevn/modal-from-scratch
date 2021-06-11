'use strict'

const height = window.innerHeight
const width = window.innerWidth

const dividers = document.querySelectorAll('.divider')
const sections = document.querySelectorAll('section')

dividers.forEach(divider => divider.style.setProperty('--divider-width', width))
sections.forEach(section => {
	section.style.setProperty('--section-height', height)
	section.style.setProperty('--section-width', width)
})


// projects
const blackout = document.querySelector('.blackout')
const body = document.querySelector('body')
const modalOpenTriggers = document.querySelectorAll('.project-button')

modalOpenTriggers.forEach(trigger => {
	trigger.addEventListener('click', () => {
		const { projectButton } = trigger.dataset
		const popupModal = document.querySelector(`[data-project-modal='${projectButton}']`)

		setModalStyle(projectButton)
		addClasses(popupModal)

		popupModal.scrollIntoView()

		popupModal.querySelector('.popup-modal__close').addEventListener('click', () => removeClasses(popupModal))
		blackout.addEventListener('click', () => removeClasses(popupModal))
	})
})

const setModalStyle = project => {
	const modalBgImages = document.getElementsByClassName('modal-mock-up')
	const modalBgImage = [...modalBgImages].find(image => image.classList.contains(`${project}`))
	const appNames = document.getElementsByClassName('app-name')
	const appName = [...appNames].find(name => name.classList.contains(`${project}`))
	const modalBgColors = document.getElementsByClassName('popup-modal')
	const modalBgColor = [...modalBgColors].find(color => color.classList.contains(`${project}`))

	let image
	let name
	let color

	switch(project) {
		case 'safer':
			image = 'url(assets/safer-modal.png)'
			color = '#7BC087'
	}

	modalBgImage.style['background-image'] = image
	appName.style.color = name
	modalBgColor.style['background-color'] = color
}


const addClasses = modal => {
	modal.classList.add('is--visible')
	blackout.classList.add('is-blacked-out')
	body.classList.add('hidden')
}

const removeClasses = modal => {
	modal.classList.remove('is--visible')
	blackout.classList.remove('is-blacked-out')
	body.classList.remove('hidden')
}
