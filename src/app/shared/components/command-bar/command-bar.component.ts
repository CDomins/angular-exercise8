import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent {
    @Output() addEmit: EventEmitter<string> = new EventEmitter<string>();
    @Output() deleteEmit: EventEmitter<string> = new EventEmitter<string>();

    addCommand = () => {
      this.addEmit.emit();
    }

    deleteAll = () => {
      this.deleteEmit.emit();
    }


}
