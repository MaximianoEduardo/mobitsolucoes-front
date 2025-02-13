import { NgModule } from "@angular/core";
import { SidebarBodyComponent } from "./components/sidebar-body/sidebar-body.component";
import { SidebarLinkComponent } from "./components/sidebar-link/sidebar-link.component";
import { CommonModule } from "@angular/common";
import { SidebardComponent } from "./sidebar.component";

@NgModule({
    declarations: [],
    imports: [
        SidebarBodyComponent,
        SidebarLinkComponent,
        SidebardComponent,
        CommonModule
    ],
    exports: [SidebardComponent]
})
export class SideBarModule {}