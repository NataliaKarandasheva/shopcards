export interface Card {
    img: string,
    title: string,
    code: string,
    comment?: string,
    country: Country,
    isFavorite?: boolean
}

export enum Country {
    OTHER = 'other',
    GREECE = 'Greece', 
    FRANCE = 'France',
    ITALY = 'Italy',
    RUSSIA = 'Russia'
}