import { Component, OnInit } from '@angular/core';
import { AlltailorService } from '../services/alltailor.service';

@Component({
  selector: 'app-addtailor',
  templateUrl: './addtailor.component.html',
  styleUrls: ['./addtailor.component.scss']
})
export class AddtailorComponent implements OnInit {

  addTailorForm:any


  constructor(private allTailorService:AlltailorService) { }

  ngOnInit() {
  }

  addTailor(at){

    at.tags = at.tags.split(',');
    at.maleDress = at.maleDress.split(',')
    at.femaleDress = at.femaleDress.split(',')
    at.tailorPics=at.tailorPics.substring(12).split(',')
    /* tailorPicsTemp.forEach(element => {
      at.tailorPics = element.substring(12)
    }); */
    
    at.dateOfRegistration = new Date()
    console.log(at)

    this.allTailorService.addTailor(at).subscribe(response => {
      console.log(response);
    })

  }

}
