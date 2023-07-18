import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirInventarioComponent } from './compartir-inventario.component';

describe('CompartirInventarioComponent', () => {
  let component: CompartirInventarioComponent;
  let fixture: ComponentFixture<CompartirInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompartirInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartirInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
