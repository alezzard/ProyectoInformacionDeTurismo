import { Inject, inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, RouterLink } from '@angular/router';

import { TokenService } from '../services/token.service';

export const authGuard: CanMatchFn = (route, state) => {

  const tokenService = inject(TokenService);
  const router = inject(Router);
  
  if (tokenService.getToken()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
