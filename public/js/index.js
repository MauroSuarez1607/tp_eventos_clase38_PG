window.onload = function(){
    //JavaScript del Index
    const $ = id => document.getElementById(id)
    let container = document.querySelector('.container');
    container.style.display = 'block';

    const logoDH = document.querySelector('.logoDH img')
    const boxMenu = document.getElementById('menu')

    logoDH.addEventListener('click', () => {
        boxMenu.classList.toggle('mostrar')
    })

    $('closeMenu').addEventListener('click', () => {
        boxMenu.classList.remove('mostrar')
    })

    boxMenu.addEventListener('mouseleave', function () {
        this.classList.remove('mostrar')
    })
}