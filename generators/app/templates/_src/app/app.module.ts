import {NgModule} from "@angular/core";
import {RoutingModule} from "./app.routing";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {SidenavComponent} from "./core/sidenav/sidenav.component";
import {SidenavItemComponent} from "./core/sidenav-item/sidenav-item.component";
import {BreadcrumbsComponent} from "./core/breadcrumb/breadcrumb.component";
import {SidenavService} from "./core/sidenav/sidenav.service";
import {BreadcrumbService} from "./core/breadcrumb/breadcrumb.service";
import {PageIndexComponent} from "./pages/index/index.component";
import {AvatarProfileComponent} from "./core/avatar-profile/avatar-profile.component";

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        SidenavItemComponent,
        BreadcrumbsComponent,
        AvatarProfileComponent,
        PageIndexComponent
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule,
    ],
    providers: [
        SidenavService,
        BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}