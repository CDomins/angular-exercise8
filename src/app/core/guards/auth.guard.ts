import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authServ: AuthService

  if (authServ.isUserLoggedIn()) {
    return true;
  } else {
    return false;
  }
};