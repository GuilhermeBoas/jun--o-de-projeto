import { conectaAPI } from "./conectaAPI.js"



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

async function listarVideos() {
    const listaDeVideos = await conectaAPI.listaVideos()
    console.log(listaDeVideos)
    listaDeVideos.forEach(video => {containerVideos.append(criarCard(video))});
}

listarVideos()

