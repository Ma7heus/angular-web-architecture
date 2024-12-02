import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureCoreComponent } from './architecture-core.component';

describe('ArchitectureCoreComponent', () => {
  let component: ArchitectureCoreComponent;
  let fixture: ComponentFixture<ArchitectureCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureCoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectureCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
