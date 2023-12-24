
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl : './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterlist :Character[]=[
    {
      name:'trunck',
      power:10
    }
  ]


  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?: string):void{
    //EMitir el ID del personaje

    this.onDelete.emit(id);

  }





}
