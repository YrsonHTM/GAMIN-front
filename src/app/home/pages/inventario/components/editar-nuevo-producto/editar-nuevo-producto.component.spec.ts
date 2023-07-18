import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNuevoProductoComponent } from './editar-nuevo-producto.component';

describe('EditarNuevoProductoComponent', () => {
  let component: EditarNuevoProductoComponent;
  let fixture: ComponentFixture<EditarNuevoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNuevoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarNuevoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
