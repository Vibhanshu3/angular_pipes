import { Component, OnInit, Input } from '@angular/core';

//this annotation is called declarator
@Component({
  //whenever this selector is used in html, it creates instance of this component nad renders its html
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //Input binding (input decelarator)
  //to receive property from different component using property binding.
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
