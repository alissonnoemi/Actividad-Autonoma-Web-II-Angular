import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuariosComponent } from '../components/registro-usuarios/registro-usuarios.component';

import { registroUsuarioGuard } from './registro-usuario.guard';

describe('registroUsuarioGuard', () => {
  const executeGuard: CanDeactivateFn<RegistroUsuariosComponent> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registroUsuarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
