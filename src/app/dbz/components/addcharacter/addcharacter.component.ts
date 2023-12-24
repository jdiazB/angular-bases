import { Character } from './../../interfaces/character.interface';

import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrl: './addcharacter.component.css',

})
export class AddcharacterComponent {




  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();






  public character: Character = {
    name:'',
    power:0
  }

  emitCharacter(): void {
    console.log(this.character)


    if(this.character.name.length ==0) return ;
    this.onNewCharacter.emit(this.character);

    this.character = {name:'', power:0};

  }





 }
