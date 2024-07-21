const nav = document.querySelector('.navbar-collapse')
const btnOpenHeader = document.querySelector('.header-box-elements')
const btnCloseHeader = document.querySelector('.header-box-img-btn')
const btnOpen = document.querySelector('.header-box-elements-text-btn')
const headerImg = document.querySelector('.header-box-img')
const aboutUsBox = document.querySelector('.header-box-elements')
const aboutUsText = document.querySelector('.header-box-elements-text')
const btnSkillMap = document.querySelector('.map-skills-box-btn')
const sillMap = document.querySelector('.map-skills-timeline')
const btnListSkills = document.querySelector('.list-group-btn')
const btnListIcon = document.querySelector('.list-group-btn i')
const listGroupList = document.querySelector('.list-group-next')
const footerYear = document.querySelector('.footer-year')
const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie-btn')
const disclaimerBtn = document.querySelector('.disclaimer-btn')
const disclaimerText = document.querySelector('.disclaimer-text')

const closeNavbar = () => {
	if (nav.classList.contains('show')) {
		nav.classList.remove('show')
	}
}

document.addEventListener('click', closeNavbar)

const openAboutMeSection = () => {
	// schowaj pasek otweirania aboutUs header
	// btnOpen.classList.add('header--hide')
	// zmniejszenie img header
	headerImg.classList.add('header-box-img--close')
	// Powiększenie box aboutUs header
	aboutUsBox.classList.add('header-box-elements--open')
	// nadanie display na tekst
	aboutUsText.classList.add('header--show')
	btnCloseHeader.classList.add('header--show')
}

const closeAboutMeSection = () => {
	// btnOpen.classList.remove('header--hide')
	headerImg.classList.remove('header-box-img--close')
	aboutUsBox.classList.remove('header-box-elements--open')
	aboutUsText.classList.remove('header--show')
	btnCloseHeader.classList.remove('header--show')
}

const openSkillMap = () => {
	const checkMap = sillMap.classList.contains('display-timeline--show')
	sillMap.classList.toggle('display-timeline--show')

	if (checkMap == true) {
		btnSkillMap.innerText = 'pokaż'
	} else {
		btnSkillMap.innerText = 'ukryj'
	}
}

const openListSkill = () => {
	if (!listGroupList.classList.contains('list-group-next-disply')) {
		btnListSkills.innerHTML = `Pokaż mniej <i class="bi bi-caret-up"></i>`
        listGroupList.classList.add('list-group-next-disply')
	} else {
        btnListSkills.innerHTML = `Pokaż więcej <i class="bi bi-caret-down"></i>`
        listGroupList.classList.remove('list-group-next-disply')
    }
}

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	if (cookieEaten) {
		cookieBox.classList.add('hide')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide')
}

const handleCookieBoxDisclaimer = () => {
	disclaimerText.classList.toggle('hide')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

btnOpenHeader.addEventListener('click', openAboutMeSection)
btnCloseHeader.addEventListener('click', closeAboutMeSection)
btnSkillMap.addEventListener('click', openSkillMap)
btnListSkills.addEventListener('click', openListSkill)
cookieBtn.addEventListener('click', handleCookieBox)
disclaimerBtn.addEventListener('click', handleCookieBoxDisclaimer)
showCookie()

handleCurrentYear()
AOS.init();