import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovicesViewEComponent } from './inovices-view-e.component';

describe('InovicesViewEComponent', () => {
  let component: InovicesViewEComponent;
  let fixture: ComponentFixture<InovicesViewEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovicesViewEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InovicesViewEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
