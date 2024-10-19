import { Component, OnInit } from '@angular/core';
import { PlatserService } from '../../../services/platser.service';
import { Place } from '../../../data models/place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loaddePlaces!: Place[];

  constructor(private placesService: PlatserService) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.loaddePlaces = this.placesService.places;
  }
}
