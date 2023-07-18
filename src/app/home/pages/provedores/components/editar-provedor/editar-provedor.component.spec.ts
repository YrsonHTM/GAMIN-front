import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProvedorComponent } from './editar-provedor.component';

describe('EditarProvedorComponent', () => {
  let component: EditarProvedorComponent;
  let fixture: ComponentFixture<EditarProvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProvedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
