import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('changeProperties', { static: true }) changeProperty!: ElementRef;

  constructor() {}
  ngOnInit() {
    console.log(this.changeProperty);
    this.changeProperty.nativeElement.style.color = 'black';
    this.changeProperty.nativeElement.style.backgroundColor = 'pink';
  }
  applyChanges(data: { textColor: string; backgroundColor: string }) {
    this.changeProperty.nativeElement.style.color = data['textColor'];
    this.changeProperty.nativeElement.style.backgroundColor =
      data['backgroundColor'];
  }
}
