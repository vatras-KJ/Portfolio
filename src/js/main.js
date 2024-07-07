const nav = document.querySelector('.navbar-collapse')
const btnOpenHeader = document.querySelector('.header-box-elements')
const btnCloseHeader = document.querySelector('.header-box-img-btn')
const btnOpen = document.querySelector('.header-box-elements-text-btn')
const headerImg = document.querySelector('.header-box-img')
const aboutUsBox = document.querySelector('.header-box-elements')
const aboutUsText = document.querySelector('.header-box-elements-text')
const btnSkillMap = document.querySelector('.map-skills-box-btn')
const sillMap = document.querySelector('.map-skills-timeline')

const closeNavbar = () => {
    if(nav.classList.contains('show')){
        nav.classList.remove('show')
    }
}

document.addEventListener('click', closeNavbar)

const openAboutMeSection = () => {
    // schowaj pasek otweirania aboutUs header
    btnOpen.classList.add('display--hide')
    // zmniejszenie img header
    headerImg.classList.add('header-box-img--close')
    // Powiększenie box aboutUs header
    aboutUsBox.classList.add('header-box-elements--open')
    // nadanie display na tekst
    aboutUsText.classList.add('display--show')
    btnCloseHeader.classList.add('display--show')

}

const closeAboutMeSection = () => {
        btnOpen.classList.remove('display--hide')
        headerImg.classList.remove('header-box-img--close')
        aboutUsBox.classList.remove('header-box-elements--open')
        aboutUsText.classList.remove('display--show')
        btnCloseHeader.classList.remove('display--show')
}

const openSkillMap = () => {
    const checkMap = sillMap.classList.contains('display-timeline--show')
    sillMap.classList.toggle('display-timeline--show')

    if(checkMap == true) {
         btnSkillMap.innerText = 'pokaż'
    } else {
        btnSkillMap.innerText = 'ukryj'
    } 
}

btnOpenHeader.addEventListener('click', openAboutMeSection)
btnCloseHeader.addEventListener('click', closeAboutMeSection)
btnSkillMap.addEventListener('click', openSkillMap)

