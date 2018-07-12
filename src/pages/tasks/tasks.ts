import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TOLIST} from '../../mocks/todoList.mocks'
/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  toList = TOLIST;
  variable = " ";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.variable = this.navParams.get("variable");
   this.toList.push({Goals:this.variable})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }
click2(){
  this.navCtrl.push('AddPage')
}
}
