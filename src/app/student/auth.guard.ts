import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

   if(localStorage.getItem('role') != 'student'){

    window.alert("You are not allowed to access this page");

    window.location.href = '';

    return false;
  }

  return true;
};
