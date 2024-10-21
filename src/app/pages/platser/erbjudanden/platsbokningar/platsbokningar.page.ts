import { Component, OnInit } from '@angular/core';
import { Place } from '../../../../data-models/place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlatserService } from '../../../../services/platser.service';

@Component({
  selector: 'app-platsbokningar',
  templateUrl: './platsbokningar.page.html',
  styleUrls: ['./platsbokningar.page.scss'],
})
export class PlatsbokningarPage implements OnInit {
  plats: Place | undefined;

  constructor(
    private rutt: ActivatedRoute,
    private navCtrl: NavController,
    private platsService: PlatserService
  ) {}

  ngOnInit() {
    this.rutt.paramMap.subscribe((params) => {
      if (!params.has('/placeId')) {
        this.navCtrl.navigateBack('/platser/tabs/erbjudanden');
        return;
      }
      this.plats = this.platsService.places.find(
        (p) => p.id === params.get('placeId')
      );
    });
  }
}
