import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBattalionsComponent } from './search-by-battalions.component';

describe('SearchByBattalionsComponent', () => {
  let component: SearchByBattalionsComponent;
  let fixture: ComponentFixture<SearchByBattalionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByBattalionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByBattalionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
