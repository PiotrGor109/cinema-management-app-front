import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemahallsComponent } from './cinemahalls.component';

describe('CinemahallsComponent', () => {
  let component: CinemahallsComponent;
  let fixture: ComponentFixture<CinemahallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemahallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinemahallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
