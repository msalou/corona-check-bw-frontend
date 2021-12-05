import { TestBed } from '@angular/core/testing';

import { CoronaFormularService } from './corona-formular.service';

describe('CoronaFormularService', () => {
  let service: CoronaFormularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaFormularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
