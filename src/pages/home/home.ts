import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [
    {title: 'Apple'},
    {title: 'Orage'},
    {title: 'Melon'},
    {title: 'Banana'},
    {title: 'Tomato'},
    {title: 'Qiwi'},
    {title: 'Grapes'},
    {title: 'Watermelon'},
    {title: 'Peach'},
    {title: 'Lemon'},
    {title: 'Carrot'},
  ]

  constructor(public navCtrl: NavController) {
  }



  public itemClicked(event,item){
    console.log('item clicked: ',item.title);
  }
}
