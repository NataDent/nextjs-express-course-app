import articles from './db.json';
import { delayed } from './delay';
import { ERRORS } from '../errors'

export function getAllArticles() {
    return delayed( articles, { timeout: 0 } )
}

export function getArticleByName( articleName: string ) {
    const article = articles.find( ( x ) => x.name === articleName );

    if ( !article ) {
        throw new Error( ERRORS.NOT_FOUND );
    }

    return delayed( article );
}