import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaFormularComponent } from './corona-formular.component';

describe('CoronaFormularComponent', () => {
  let component: CoronaFormularComponent;
  let fixture: ComponentFixture<CoronaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
