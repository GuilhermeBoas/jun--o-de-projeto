async function listaVideos() {
    const reponse = await fetch('http://localhost:3000/videos');
    const lista = await reponse.json()

    return lista
}

export const conectaAPI={
    listaVideos
}
