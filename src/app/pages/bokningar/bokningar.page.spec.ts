import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BokningarPage } from './bokningar.page';

describe('BokningarPage', () => {
  let component: BokningarPage;
  let fixture: ComponentFixture<BokningarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BokningarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
