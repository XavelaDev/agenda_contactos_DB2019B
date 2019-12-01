import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
  nm = "";
  av = "";
  cr = "";
  tel = "";
  fb = "";
  tw = "";
  ins = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nm = navParams.get('nm');
    this.av = navParams.get('av');
    this.cr = navParams.get('cr');
    this.tel = navParams.get('tel');
    this.fb = navParams.get('fb');
    this.tw = navParams.get('tw');
    this.ins = navParams.get('ins');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

}
