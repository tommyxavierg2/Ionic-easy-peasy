import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  user = {
    id: 1,
    name: 'Test',
    lastname: 'Testing',
    email: 'test@testing.com',
    identification: '0000000000',
    accountType: 1,
    dob: '00/00/0000',
    employmentState: 0,
    phone: '0000000',
    optionalPhone: '000000',
    creationDate: '00/00/0000',
    lastConnection: new Date().toDateString(),
    transaction: {
      senderAccount: '',
      receiverAccount: '',
      date: '',
      amount: '',
      type: 'Pago',
      message: ''
    },
    products: [
      {
        id: 1, userId: 1, alias: '', creationData: '', code: '000111222333', name: 'Cuenta de prueba', balance: '000.00', transactions: [
          { id: 1, senderAccount: 1, receiverAccount: 2, date: '00/00/0000', amount: '0,000.00', message: 'test', type: 'Pago' },
          { id: 2, senderAccount: 2, receiverAccount: 1, date: '11/00/0000', amount: '1,000.00', message: 'test 1', type: 'Transferencia' }
        ]
      },
      {
        id: 2, userId: 2, alias: '', creationData: '', code: '111222333444', name: 'Cuenta de prueba 1', balance: '111.11', transactions: [
          { id: 1, senderAccount: 1, receiverAccount: 2, date: '00/00/0000', amount: '0,000.00', message: 'test', type: 'Pago' },
          { id: 2, senderAccount: 2, receiverAccount: 1, date: '11/00/0000', amount: '1,000.00', message: 'test 1', type: 'Transferencia' }
        ]
      },
      {
        id: 3, userId: 3, alias: '', creationData: '', code: '222333444555', name: 'Cuenta de prueba 2', balance: '222.22', transactions: [
          { id: 1, senderAccount: 1, receiverAccount: 2, date: '00/00/0000', amount: '0,000.00', message: 'test', type: 'Pago' },
          { id: 2, senderAccount: 2, receiverAccount: 1, date: '11/00/0000', amount: '1,000.00', message: 'test 1', type: 'Transferencia' }
        ]
      }
    ]
  }

  page = {
    date: new Date().toDateString()
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserProvider) {
    this.user.transaction.date = this.page.date;
  }

  pay() {
    console.log(this.user)
    /*this.userService.performPayment()
      */
  }  

  cancel() {
    this.navCtrl.parent.select(0);
  }

}
