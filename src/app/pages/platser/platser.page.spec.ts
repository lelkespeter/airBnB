import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatserPage } from './platser.page';

describe('PlatserPage', () => {
  let component: PlatserPage;
  let fixture: ComponentFixture<PlatserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
