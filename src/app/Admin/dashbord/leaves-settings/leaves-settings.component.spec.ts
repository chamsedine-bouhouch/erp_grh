import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesSettingsComponent } from './leaves-settings.component';

describe('LeavesSettingsComponent', () => {
  let component: LeavesSettingsComponent;
  let fixture: ComponentFixture<LeavesSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
