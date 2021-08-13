import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovicesDetailsComponent } from './inovices-details.component';

describe('InovicesDetailsComponent', () => {
  let component: InovicesDetailsComponent;
  let fixture: ComponentFixture<InovicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovicesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InovicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
