import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    HeroComponent,

  ],
  exports:[
    HeroComponent,

  ],
  imports:[
    CommonModule
  ]

})
export class HeroesModuel{

}
