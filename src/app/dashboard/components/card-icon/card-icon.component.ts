import { Component, Input, signal } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CardIcon } from '../../../interfaces/card-icon';

@Component({
  selector: 'dashboard-card-icon',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './card-icon.component.html',
  styles: ``
})
export class CardIconComponent {

  @Input()
  public cardIconInfo: CardIcon | undefined = undefined;

}
