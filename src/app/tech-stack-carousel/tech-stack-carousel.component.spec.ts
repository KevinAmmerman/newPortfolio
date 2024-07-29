import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackCarouselComponent } from './tech-stack-carousel.component';

describe('TechStackCarouselComponent', () => {
  let component: TechStackCarouselComponent;
  let fixture: ComponentFixture<TechStackCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
