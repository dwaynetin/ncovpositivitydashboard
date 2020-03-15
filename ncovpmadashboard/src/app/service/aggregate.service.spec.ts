import { TestBed } from '@angular/core/testing';

import { AggregateService } from './aggregate.service';

describe('AggregateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AggregateService = TestBed.get(AggregateService);
    expect(service).toBeTruthy();
  });
});
