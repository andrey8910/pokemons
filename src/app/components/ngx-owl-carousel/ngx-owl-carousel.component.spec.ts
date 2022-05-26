import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOwlCarouselComponent } from './ngx-owl-carousel.component';

describe('NgxOwlCarouselComponent', () => {
  let component: NgxOwlCarouselComponent;
  let fixture: ComponentFixture<NgxOwlCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOwlCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOwlCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
