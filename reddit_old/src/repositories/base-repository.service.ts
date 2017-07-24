import { Observable } from 'rxjs/Rx';
import {Database, Client, Collection} from 'documentdb-typescript';

export class BaseRepository<T> {
    database: Database;
    client: Client;
    collection: Collection;

    constructor(id: string, url: string, key: string) {
        this.database = new Database(id, url, key);
        this.client = new Client(url, key);
        this.collection = new Collection(id, this.database);
    }

    getAll(query: string = null): void {
        // const results = this.collection.queryDocuments(query);
        // const allDocs = Observable.fromPromise(results.toArray());

        // allDocs.map((docs) => {
        //     docs.map((doc) => {
        //         doc.
        //     })
        // })

    }

    get(id: string): void {
        const document = Observable.fromPromise(this.collection.findDocumentAsync(id));

        document.map((res) => {
            return res;
        });
    }
}