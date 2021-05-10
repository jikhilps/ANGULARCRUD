import { AddOnOptions } from "./AddOnOptions";

export class Item{
    Id:number=0;
    ItemName:string='';
    Category:string='';
    DeliveryMode:number=0;

    AddonOptionLiss:AddOnOptions[]=[];
}