import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  textColor: string;
  backgroundColor: string;

  @Output() infoGathered = new EventEmitter<{
    textColor: string;
    backgroundColor: string;
  }>();
  emitEvent() {
    this.infoGathered.emit({
      textColor: this.textColor,
      backgroundColor: this.backgroundColor,
    });
  }
}
