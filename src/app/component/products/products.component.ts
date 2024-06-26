import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  products = [
    { title: 'Limit Switch SZL-WL-J', description: 'Honeywell Limit Switch SZL-WL-J', image: 'assets/sampe.png' },
    { title: 'Micro Switch-2000 ABC', description: 'BZC-2RQ18-A2 Honeywell Micro Switch', image: 'assets/sampe2.png' },
    { title: 'Limit Switch SZL-WL-HLE', description: 'Honeywell Limit Switch SZL-WL-HLE', image: 'assets/samp3.png' },
    { title: 'Limit Switch 1EN1-6', description: 'Honeywell Limit Switch 1EN1-6 ', image: 'assets/sampe4.png' },
    { title: 'GKMA13', description: 'Honeywell GKMA13', image: 'assets/sample5.png' },
    { title: '14CE1-3', description: 'Honeywell 14CE1-3', image: 'assets/sample6.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  openWhatsApp(): void {
    const phoneNumber = '9868983656';
    const message = 'Hello, I would like to inquire about your services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

}
