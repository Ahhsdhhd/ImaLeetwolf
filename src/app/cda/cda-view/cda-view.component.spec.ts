import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaViewComponent } from './cda-view.component';

describe('CdaViewComponent', () => {
  let component: CdaViewComponent;
  let fixture: ComponentFixture<CdaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
