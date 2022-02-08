import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Smartphone } from 'src/app/models/smartphone';
import { SmartphoneService } from 'src/app/services/smartphone.service';

@Component({
  selector: 'app-smartphone-listing',
  templateUrl: './smartphone-listing.component.html',
  styleUrls: ['./smartphone-listing.component.scss']
})
export class SmartphoneListingComponent implements OnInit {

public smartphones: Smartphone[];
public smartphoneForm: FormGroup; 
@Input() searchText: any;

constructor(private _smartphoneService: SmartphoneService, private _router: ActivatedRoute) { 

  /*this._smartphoneService.getSmartphones().subscribe((data)=>{
    this.smartphones = data;

  })
  this.initForm();*/

  }
  initForm() {
    this.smartphoneForm = new FormGroup({
      id: new FormControl(1, [
        Validators.required
      ]),
      brend: new FormControl('', [
        Validators.required
      ]),
      model: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required
      ]),
      video: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
    this._smartphoneService.getSmartphones().subscribe((data)=>{
      this.smartphones = data;
  
    })
    this.initForm();
  }

public submitForm(){
  let id = this.smartphoneForm.get('id')?.value;
  let brend = this.smartphoneForm.get('brend')?.value;
  let model = this.smartphoneForm.get('model')?.value;
  let image = this.smartphoneForm.get('image')?.value;
  let video = this.smartphoneForm.get('video')?.value;
  let smartphone = new Smartphone(id, brend, model, image, video);
  this.createSmartphone(smartphone);

}
 public createSmartphone(smartphone: Smartphone) {
   this._smartphoneService.createSmartphone(smartphone).subscribe((data: any)=>{
     this.smartphones.unshift(data);
   })
  }

public getSmartphone(id: number){
  this._smartphoneService.getSmartphone(id).subscribe((data)=>{
    alert(JSON.stringify(data));
  })
}

public deleteSmartphone(id: number){
  this._smartphoneService.deleteSmartphone(id).subscribe((data)=>{
    this._removeSmartphoneFromList(id);
  })
}
  _removeSmartphoneFromList(id: number) {
    let index = this.smartphones.findIndex(smartphone => smartphone.id == id);
    this.smartphones.splice(index, 1);
  }

  public updateSmartphone(){

    
  }

}
