// SHOW MENU 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// ACTIVATE AND REMOVE MENU 
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Home
sr.reveal('.home-title',{})
sr.reveal('.home-img',{delay:450})
sr.reveal('.home-social-icon', {interval: 200})

//About
sr.reveal('.wildcat-img',{delay: 20})
sr.reveal('.uc-img',{})
sr.reveal('.about-text',{})
sr.reveal('.about-text-2', {delay: 20})

//Skills
sr.reveal('.skills-data',{})

//Work
sr.reveal('.work-img',{interval: 100})