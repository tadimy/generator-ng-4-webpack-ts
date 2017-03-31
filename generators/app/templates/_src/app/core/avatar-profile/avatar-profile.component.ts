import {Component, OnDestroy, OnInit} from "@angular/core";
@Component({
    selector: 'yt-avatar-profile',
    templateUrl: './avatar-profile.component.pug',
    styleUrls: [
        './avatar-profile.component.scss'
    ]
})
export class AvatarProfileComponent implements OnInit, OnDestroy {
    public profileImg: string;
    public username: string;

    constructor() {
        this.profileImg = "/assets/img/profile-avatar.jpg";
        this.username = "大新的月饼脸盘";
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}