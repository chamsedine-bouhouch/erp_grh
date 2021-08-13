import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInovicesComponent } from './admin-inovices.component';

describe('AdminInovicesComponent', () => {
  let component: AdminInovicesComponent;
  let fixture: ComponentFixture<AdminInovicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInovicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInovicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
