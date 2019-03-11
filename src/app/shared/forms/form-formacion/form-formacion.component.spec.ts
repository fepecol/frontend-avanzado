import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormacionComponent } from './form-formacion.component';

describe('FormFormacionComponent', () => {
  let component: FormFormacionComponent;
  let fixture: ComponentFixture<FormFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
