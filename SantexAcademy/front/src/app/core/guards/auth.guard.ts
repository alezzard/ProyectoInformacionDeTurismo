import { Inject, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';

import { TokenService } from '../services/token.service';

export const authGuard: CanMatchFn = (route, state) => {

  const tokenService = inject(TokenService);
  
  if (tokenService.getToken()) {
    return true;
  } else {
    return false;
  }
};
