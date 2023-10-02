import { TestBed } from '@angular/core/testing';

import { ValidFormService } from './valid-form.service';

describe('ValidFormService', () => {
  let service: ValidFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
