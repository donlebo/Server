export declare const getFilms: () => ({
    name: string;
    genre: string;
    actor: {
        name: string;
    }[];
    duration: string;
    id: string;
    genere?: undefined;
} | {
    name: string;
    genere: string;
    actor: {
        name: string;
    }[];
    duration: string;
    id: string;
    genre?: undefined;
})[];
