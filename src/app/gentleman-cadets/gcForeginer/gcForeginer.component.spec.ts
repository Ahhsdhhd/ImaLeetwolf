/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GcForeginerComponent } from './gcForeginer.component';

describe('GcForeginerComponent', () => {
  let component: GcForeginerComponent;
  let fixture: ComponentFixture<GcForeginerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcForeginerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcForeginerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
