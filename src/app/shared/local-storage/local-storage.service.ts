import {Injectable} from '@angular/core';
import {LocalStorage} from './local-storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements LocalStorage {

  constructor() {
  }

  set(key: string, value: Object): boolean {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }

  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

}
