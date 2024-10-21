import { Component, OnInit } from '@angular/core';
import { PlatserService } from '../../../services/platser.service';
import { Place } from '../../../data-models/place.model';

@Component({
  selector: 'app-erbjudanden',
  templateUrl: './erbjudanden.page.html',
  styleUrls: ['./erbjudanden.page.scss'],
})
export class ErbjudandenPage implements OnInit {
  erbjudanden: Place[] | undefined;

  constructor(private platsService: PlatserService) {}

  ngOnInit() {
    this.erbjudanden = this.platsService.places;
  }
}
