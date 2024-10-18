import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatsbokningarPage } from './platsbokningar.page';

describe('PlatsbokningarPage', () => {
  let component: PlatsbokningarPage;
  let fixture: ComponentFixture<PlatsbokningarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatsbokningarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
