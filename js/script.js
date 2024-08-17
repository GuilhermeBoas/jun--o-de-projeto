import { conectaAPI } from "./conectaAPI.js"

async function listaImportada(){
    const lista = await conectaAPI.listaVideos()
    return lista
}

function criarCard(obj) {
    const video = document.createElement('li')
    video.className = 'videos__item'
    video.innerHTML = ` 
    <iframe src="${obj.url}" title="${obj.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class="descricao-video">
                <img class="img-canal" src="${obj.imagem} alt="Logo do Canal">
                <h3 class="titulo-video">${obj.titulo}</h3>
                <p class="titulo-canal">${obj.descricao}</p>
        </div>
    `
    return video
}

const containerVideos = document.querySelector('.videos__container')

async function listarVideos(promisse) {
    containerVideos.innerHTML = ''
    const lista = await promisse
    
    lista.forEach(video => {containerVideos.append(criarCard(video))});
}

listarVideos(listaImportada())

// filtro sessão superior 

const listaBtns = document.querySelectorAll('.superior__secao__container-wrapper a')

listaBtns.forEach(btn => btn.addEventListener('click',()=>{
    btn.name == 'Tudo'? listarVideos(listaImportada()):listaFiltrada(btn.name)
    }
))

async function listaFiltrada(filtro){
    const promessa = await fetch(`http://localhost:3000/videos?categoria=${filtro}`)
    const lista = await promessa.json()
    listarVideos(lista)
}
