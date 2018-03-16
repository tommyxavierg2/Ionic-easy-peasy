import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product-request',
  templateUrl: 'product-request.html',
})
export class ProductRequestPage {
  user = {
    name: '',
    lastname: '',
    documentType: { id: null },
    documentNumber: '',
    phone: '',
    email: '',
    employmentState: null,
    product: { id: null }
  };

  products = [
    { id: 1, name: 'Product'},
    { id: 2, name: 'Product 1' },
    { id: 3, name: 'Product 2' }
  ];

  documentTypes = [
    { id: 1, type: 'Cedula' },
    { id: 2, type: 'Pasaporte' }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  show() {
    console.log(this.user);
  }

  onViewDidLoad() {
    this.getProducts();
  }

  getProducts() {

  }

  requestProduct() {

  }

}
