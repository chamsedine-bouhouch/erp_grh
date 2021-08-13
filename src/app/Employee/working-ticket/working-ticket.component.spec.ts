import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTicketComponent } from './working-ticket.component';

describe('WorkingTicketComponent', () => {
  let component: WorkingTicketComponent;
  let fixture: ComponentFixture<WorkingTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
