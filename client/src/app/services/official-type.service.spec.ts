import { TestBed } from '@angular/core/testing';

import { OfficialTypeService } from './official-type.service';

describe('OfficialTypeService', () => {
  let service: OfficialTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficialTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
