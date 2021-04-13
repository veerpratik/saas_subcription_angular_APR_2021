import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSubcriptionComponent } from './cancel-subcription.component';

describe('CancelSubcriptionComponent', () => {
  let component: CancelSubcriptionComponent;
  let fixture: ComponentFixture<CancelSubcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelSubcriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSubcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
