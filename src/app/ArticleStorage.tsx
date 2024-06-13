const getLikeKey = ( articleName: string ) => `drag13_blog_1_like_${articleName}`;

class ArticleStorage {
    private get storage() {
        return localStorage;
    }

    private get isStorageReady() {
        return 'localstorage' in globalThis;
    }

    like( articleName: string ) {
        const likeKey = getLikeKey( articleName );
        this.storage.setItem( likeKey, 'like' )
    }

    liked( articleName: string ): boolean {
        if ( !this.isStorageReady ) {
            return false;
        }

        const likeKey = getLikeKey( articleName );
        return this.storage.getItem( likeKey ) === 'like';
    }
}

export const articleStorage = new ArticleStorage();

// https://chatgpt.com/c/b2eeb0c0-6e77-4038-a564-5cc6d1c3b8c5
// Это моя беседа с ИИ на тему, как создать функцию unlike в LocalStorage