import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login.service';
import { List } from 'src/class/List';
import { from } from 'rxjs';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {Item} from 'src/class/Item';

import { AddOnOptions } from 'src/class/AddOnOptions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UserName: string = '';
  DemoList:any[]=[]
  item=new Item();
  addonoptions=new AddOnOptions();
  CategoryList:any[]=['Fresh',"Frozen","Spicey","Ice Cream","Juice"]
  AddOnList:any[]=[{name:'Add Sugar',IsSelected:0},{name:'Add Salt',IsSelected:0},{name:'Add Ketchup',IsSelected:0},{name:'Add Spicey',IsSelected:0}]
  constructor(private actroute:ActivatedRoute,private router:Router) { 
    
  }

  
  ngOnInit(): void {
   
  }


  Addnew(){
    let data;
    let navigationextras:NavigationExtras={
      state:{data}
    }
  }


  ChangeAddOn(event,add){
    if(event.target.checked){
      this.addonoptions.name=add.name;
      this.addonoptions.IsSelected=1
      this.item.AddonOptionLiss.push(this.addonoptions);
      this.addonoptions=new AddOnOptions();
  

    }else{
      let index=this.item.AddonOptionLiss.findIndex(x=> x==add);
      this.item.AddonOptionLiss.splice(index,1);
    }

  }

  clear(){
    this.AddOnList.forEach(element => {
      element.IsSelected=0;
    });
  }

 

  Open(item) {
    this.item = item;
    this.item.AddonOptionLiss.forEach(x => {
      if(this.AddOnList.find(d=>d.name==x.name)){
      this.AddOnList.find(d=>d.name==x.name).IsSelected=1;
      }
    });

  }

  update(){
    if(this.item.ItemName.length>0 && this.item.Category.length>0 && this.item.DeliveryMode>0){

  this.DemoList.filter(d=>d.Id==this.item.Id)[0]=this.item;
   this.item=new Item();
   this.clear();
  
    }
    else{
      alert("Please Enter all mandatory fields")
    }
  }

  Delete(index){
    if(confirm("Are you sure you want to remove?")){
      this.DemoList.splice(index,1);
      this.clear();
      this.item=new Item();

    } 

   

  }

  Add(){
    if(this.item.ItemName.length>0 && this.item.Category.length>0 && this.item.DeliveryMode>0){
      this.item.Id=this.DemoList.length+1;
      this.DemoList.push(this.item);
      this.item=new Item();
      
      this.clear();
      
    }else{
      alert("Please Enter all mandatory fields")
    }
    
   
  }

}
