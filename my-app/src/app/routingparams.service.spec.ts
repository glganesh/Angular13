import { TestBed } from '@angular/core/testing';

import { RoutingparamsService } from './routingparams.service';

describe('RoutingparamsService', () => {
  let service: RoutingparamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingparamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
