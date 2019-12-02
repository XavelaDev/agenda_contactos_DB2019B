import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AgregarPage } from '../agregar/agregar';
import { MostrarPage } from '../mostrar/mostrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  agregarPage = AgregarPage;
  mostrarPage = MostrarPage;

  contactos:any;
  constructor(public navCtrl: NavController, public http: HttpClient){
    //this.http.get('/agenda/agenda/')
    //.subscribe(data => {
    //  this.contactos = data;
    //  console.log(JSON.stringify(data));
    //}, error => {
    //  console.log(JSON.stringify(error));
    //});
  }

  ionViewWillEnter() {
    this.http.get('/agenda/agenda/')
      .subscribe(data => {
        this.contactos = data;
        console.log(JSON.stringify(data));
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  agregarClick(){
    console.log('clickAdd');
    this.navCtrl.push(this.agregarPage);
  }

  contactoClick(nm, av, cr, tel, fb, tw, ins){
    this.navCtrl.push(this.mostrarPage, 
                      {nm: nm, av: av, cr: cr, tel: tel, fb: fb, tw: tw, ins: ins});
  }

}
