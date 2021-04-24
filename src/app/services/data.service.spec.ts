import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set data', () => {
    service.setData('Test Data ~!@#$%^&*()_+-=1');
    expect(service.data).toEqual('Test Data ~!@#$%^&*()_+-=1');
  });

  it('should get data', () => {
    service.data = 'Test Data ~!@#$%^&*()_+-=1';
    expect(service.getData()).toEqual('Test Data ~!@#$%^&*()_+-=1');
  });
});
