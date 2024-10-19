import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-platsdetalj',
  templateUrl: './platsdetalj.page.html',
  styleUrls: ['./platsdetalj.page.scss'],
})
export class PlatsdetaljPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  onBoka() {
    this.navCtrl.navigateBack('/platser/tabs/discover');
  }
}
