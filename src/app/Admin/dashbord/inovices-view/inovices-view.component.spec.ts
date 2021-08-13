import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovicesViewComponent } from './inovices-view.component';

describe('InovicesViewComponent', () => {
  let component: InovicesViewComponent;
  let fixture: ComponentFixture<InovicesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovicesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InovicesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
