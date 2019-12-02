import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nombre = "";
  avatar = "";
  correo = "";
  telefono = "";
  facebook = "";
  twitter = "";
  instagram = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  agregarContacto(){
    //console.log('Agregar contacto');
    if (!this.nombre || !this.telefono)
    {
      this.showAlert();
    }
    else{
      const contacto = {
        nombre: this.nombre,
        avatar: this.avatar,
        correo: this.correo,
        telefono: this.telefono,
        facebook: this.facebook,
        twitter: this.twitter,
        instagram: this.instagram
      };
      //console.log(JSON.stringify(contacto));

      this.http.post('/agenda/agenda/', contacto)
        .subscribe(data => {
          console.log(JSON.stringify(data));
          this.navCtrl.pop();
        }, error => {
          console.log(JSON.stringify(error));
          this.navCtrl.pop();
        });
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: 'El contacto debe tener nombre y teléfono',
      buttons: ['OK']
    });
    alert.present();
  }

}
