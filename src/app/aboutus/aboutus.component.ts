import { Component, OnInit } from '@angular/core';
import { StockdataService } from '../stockdata.service';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  data:string='';
  constructor(private service:StockdataService) {}

  ngOnInit(): void {
  }
  getData(){
    this.service.getdata().subscribe(data=>{
      console.warn(data);
      //this.data = data;
    });
  }

}
