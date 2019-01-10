export interface LocalStorage {
  set(key: string, value: any): boolean;
  get<T>(key: string): T;
}
