import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErbjudandenPage } from './erbjudanden.page';

describe('ErbjudandenPage', () => {
  let component: ErbjudandenPage;
  let fixture: ComponentFixture<ErbjudandenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ErbjudandenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
