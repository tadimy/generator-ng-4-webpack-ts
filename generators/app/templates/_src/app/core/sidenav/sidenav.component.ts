import {Component, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {SidenavService} from "./sidenav.service";
import {BreadcrumbService} from "../breadcrumb/breadcrumb.service";
import {SidenavItem} from "../sidenav-item/sidenav-item.model";
@Component({
    selector: "yt-sidenav",
    templateUrl: "./sidenav.component.pug",
    styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

    items: SidenavItem[];

    private _itemsSubscription: Subscription;
    private _routerEventsSubscription: Subscription;

    constructor(private sidenavService: SidenavService,
                private router: Router,
                private breadcrumbService: BreadcrumbService) {
    }
}