import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtailor',
  templateUrl: './addtailor.component.html',
  styleUrls: ['./addtailor.component.scss']
})
export class AddtailorComponent implements OnInit {

  addTailorForm:any


  constructor() { }

  ngOnInit() {
  }

  addTailor(at){
    console.log(at)
  }

}
