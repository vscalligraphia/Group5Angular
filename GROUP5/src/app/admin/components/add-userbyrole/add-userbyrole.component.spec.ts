import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserbyroleComponent } from './add-userbyrole.component';

describe('AddUserbyroleComponent', () => {
  let component: AddUserbyroleComponent;
  let fixture: ComponentFixture<AddUserbyroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserbyroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserbyroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
