import { Component } from '@angular/core';
import { } from '../services/github.service';
import { GitHubService } from '../../services/github.service';
import 'rxjs/add/operator/map';
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    protected user: any;
    protected repos: any[];
    username: string;

    constructor(private _githubService: GitHubService) {
        // this.update();
        this.user = false;
    }


    searchUser() {
        this._githubService.updateUser(this.username);
        this.update();

    }

    update() {
        this._githubService.getUsername().subscribe(user => {
            // console.log(user);
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => {
            // console.log(user);
            this.repos = repos;
        });
    }
}
