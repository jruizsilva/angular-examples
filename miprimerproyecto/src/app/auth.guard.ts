import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const id = localStorage.getItem('id');
  if (id === '1234') {
    console.log('id valido');
    return true;
  }
  console.log('id invalido');
  return false;
};
