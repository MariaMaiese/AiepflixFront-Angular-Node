export interface Movie {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface ApiResult {
    Search: Movie[],
    totalResults: number,
    Response: boolean
}

export interface GifInfo {
    url: string,
    dims: any,
    size: number,
    preview: string
}

//export interface webm {
//    preview: string,
//    url: string
//}

export interface mediaInfo {
    mediumgif: any,
    gif: GifInfo,
    nanowebm: any,
    mp4: any,
    tinymp4: any,
    nanomp4: any,
    tinygif: any,
    loopedmp4: any,
    nanogif: any,
    webm: any,
    tinywebm: any


}

export interface Gif {
    id: number,
    title: string,
    content_description: string,
    content_rating: string,
    h1_title: string,
    media: mediaInfo[],
    itemurl: string,
    url: string
}

export interface ApiGifResult {
    results: Gif[],
    next: number

}

export interface GifResponse {
    ok: boolean,
    gifs: GifLocal[]
}

export interface GifLocal {
    id?: number,
    name?: string,
    imagen?: string
}

export interface Usuario {
    name?: string,
    email?: string,
    password?: string
}

export interface userToken {
    ok: boolean,
    token: string

}

export interface Pelicula {
    id?: number,
    name?: string,
    poster?: string,
    year?: number
}

export interface GeneroResponse {
    ok: boolean,
    generos: Genero[]
}

export interface Genero {
    _id?: string,
    name?: string
}