import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByGcComponent } from './search-by-gc.component';

describe('SearchByGcComponent', () => {
  let component: SearchByGcComponent;
  let fixture: ComponentFixture<SearchByGcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByGcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByGcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
