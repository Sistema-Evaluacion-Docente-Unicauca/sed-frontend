import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportMangementComponent } from './support-mangement.component';

describe('SupportMangementComponent', () => {
  let component: SupportMangementComponent;
  let fixture: ComponentFixture<SupportMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportMangementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
