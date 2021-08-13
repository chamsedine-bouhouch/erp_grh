import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CticketComponent } from './cticket.component';

describe('CticketComponent', () => {
  let component: CticketComponent;
  let fixture: ComponentFixture<CticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
