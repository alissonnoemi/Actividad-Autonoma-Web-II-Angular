import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

export const loginCanMatchGuard: CanMatchFn = (route, segments) => {
  const authServicio = inject(AutenticacionService);
  return !authServicio.sesionIniciada();
};
