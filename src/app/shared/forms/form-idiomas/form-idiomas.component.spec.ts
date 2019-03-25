import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIdiomasComponent } from './form-idiomas.component';

describe('FormIdiomasComponent', () => {
  let component: FormIdiomasComponent;
  let fixture: ComponentFixture<FormIdiomasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIdiomasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
