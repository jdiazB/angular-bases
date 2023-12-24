import { DbzService } from '../services/dbs.service';
import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

constructor( private dbzservice : DbzService){}

  get characters(): Character[] {
    return [...this.dbzservice.characters];
  }

  onDeleteCharacter(id : string): void {
    this.dbzservice.deleteCharacterById(id)
  }

  onNewCharacter(characters : Character): void{this.dbzservice.addCharacter(characters)}




}
