export interface Movies {
    Search: MoviesInfo[];
}

export interface MoviesInfo {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}
