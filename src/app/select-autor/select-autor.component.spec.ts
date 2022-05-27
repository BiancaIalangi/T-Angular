import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAutorComponent } from './select-autor.component';

describe('SelectAutorComponent', () => {
  let component: SelectAutorComponent;
  let fixture: ComponentFixture<SelectAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
