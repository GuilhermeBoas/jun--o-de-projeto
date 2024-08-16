async function listaVideos() {
    const reponse = await fetch('https://guilhermeboas.github.io/api-teste/videos.json');
    const lista = await reponse.json()

    return lista.videos
}

export const conectaAPI={
    listaVideos
}
