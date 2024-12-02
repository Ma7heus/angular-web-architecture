import { TestBed } from '@angular/core/testing';

import { ArchitectureCoreService } from './architecture-core.service';

describe('ArchitectureCoreService', () => {
  let service: ArchitectureCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchitectureCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
