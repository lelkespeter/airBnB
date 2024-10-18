import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NyttErbjudandePage } from './nytt-erbjudande.page';

describe('NyttErbjudandePage', () => {
  let component: NyttErbjudandePage;
  let fixture: ComponentFixture<NyttErbjudandePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NyttErbjudandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
