import { TestBed } from '@angular/core/testing';

import { DataHistorialService } from './data-historial.service';

describe('DataHistorialService', () => {
  let service: DataHistorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHistorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
