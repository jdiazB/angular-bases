import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddcharacterComponent } from './components/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddcharacterComponent


  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
