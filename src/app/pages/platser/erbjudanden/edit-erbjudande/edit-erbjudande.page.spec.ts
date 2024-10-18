import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditErbjudandePage } from './edit-erbjudande.page';

describe('EditErbjudandePage', () => {
  let component: EditErbjudandePage;
  let fixture: ComponentFixture<EditErbjudandePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditErbjudandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
