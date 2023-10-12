import { newsType } from "../types/Types"

export const RemoveDuplicateData = (articles: any ) => {
    const randomArticles = articles?.articles;
    const filterArticles = randomArticles.filter((article: newsType) => article?.source.id !== null);
    return filterArticles
}