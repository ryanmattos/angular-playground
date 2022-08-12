import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list', (done: DoneFn) => {
    service.getProducts().subscribe( { 
      next: x => {
        expect(x.length).toBeGreaterThan(0)
        done();
      }
    });
  })

  it('should insert product', () => {
    
  })
});