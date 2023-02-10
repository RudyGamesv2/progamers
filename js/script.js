document.addEventListener('DOMContentLoaded', () => {

    const nav = document.getElementById('navbar')

    const allNavLinks = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    //get date for footer
    const year = document.querySelector('#date')
    year.textContent = new Date().getFullYear()

    addShadow = () => {
        if(window.scrollY >= 300){
            nav.classList.add('shadow-bg')
        }
        else{
            nav.classList.remove('shadow-bg')
        }
    }

    allNavLinks.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))


    // window.addEventListener('scroll', addShadow)

    if(window.innerWidth >= 768){
        window.addEventListener('scroll', addShadow)
    }
    else{
        nav.classList.add('shadow-bg')
    }
    

})