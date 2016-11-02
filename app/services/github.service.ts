import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private username: string;
    private client_id = "a032f1fd2222f04c450b";
    private client_secret = "ef767d9d647980f7b135daffb5b1989f977419ae";
    constructor(private _http: Http) {
        // console.log(' GitHubService ready..... ');
        this.username = 'e4basil';

    }

    getUsername() {
        return this._http.get('https://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string) {
        this.username = username;
    }
}
