import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GentlemanCadetsComponent } from './gentleman-cadets.component';

describe('GentlemanCadetsComponent', () => {
  let component: GentlemanCadetsComponent;
  let fixture: ComponentFixture<GentlemanCadetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GentlemanCadetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GentlemanCadetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
