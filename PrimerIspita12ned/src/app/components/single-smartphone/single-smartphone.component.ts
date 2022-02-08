import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Smartphone } from 'src/app/models/smartphone';
import { SmartphoneService } from 'src/app/services/smartphone.service';

@Component({
  selector: 'app-single-smartphone',
  templateUrl: './single-smartphone.component.html',
  styleUrls: ['./single-smartphone.component.scss']
})
export class SingleSmartphoneComponent implements OnInit {

public smartphone: Smartphone;

  constructor(private _router: ActivatedRoute, private _smartphoneService: SmartphoneService ) {}

  ngOnInit() {
    this._router.params.subscribe(parms => {
      let id = +parms['id'];
      this.getSmartphone(id);
    })
  }
  public getSmartphone(id: number) {
   this._smartphoneService.getSmartphone(id).subscribe((data) =>{
     this.smartphone = data;
   })
  }

}
