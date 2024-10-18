import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatsdetaljPage } from './platsdetalj.page';

describe('PlatsdetaljPage', () => {
  let component: PlatsdetaljPage;
  let fixture: ComponentFixture<PlatsdetaljPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatsdetaljPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
