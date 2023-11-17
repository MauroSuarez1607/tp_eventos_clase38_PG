window.onload = function(){
    const $ = id => document.getElementById(id)

    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    /*$('logoDH').addEventListener('mouseover', () => {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })*/

    $('buttonDark').addEventListener('click', function () {

        if(this.textContent === "modo oscuro"){
            body.style.backgroundColor = '#7f7f7f'
            body.classList.add('fondoMoviesList');
            this.textContent = "modo claro"
        }else {
            body.style.backgroundColor = '#ffffff'
            body.classList.remove('fondoMoviesList');    
            this.textContent = "modo oscuro"

        }
    })
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}