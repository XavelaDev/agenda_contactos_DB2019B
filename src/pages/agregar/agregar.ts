import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  agregarContacto(){
    console.log('Agregar contacto');
    
    const contacto = {
      nombre: this.nombre,
      avatar: this.avatar,
      correo: this.correo,
      telefono: this.telefono,
      facebook: this.facebook,
      twitter: this.twitter,
      instagram: this.instagram
    };
    console.log(JSON.stringify(contacto));
  }

}
