import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly year = new Date().getFullYear();
  readonly whatsappUrl = 'https://wa.me/5548998360776?text=' + encodeURIComponent('Olá! Vim pelo site da Innker e gostaria de conversar sobre um projeto.');
}
