export interface Card {
    img: string,
    title: string,
    code: string,
    comment?: string,
    country: Country,
    isFavorite?: boolean
}

export enum Country {
    ALL = 'all',
    GREECE = 'Greece', 
    FRANCE = 'France',
    ITALY = 'Italy',
    RUSSIA = 'Russia',
    TURKEY = 'Turkey'
}