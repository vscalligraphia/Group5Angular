import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsusComponent } from './contactsus.component';

describe('ContactsusComponent', () => {
  let component: ContactsusComponent;
  let fixture: ComponentFixture<ContactsusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
