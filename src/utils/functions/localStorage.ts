// Define the global storage key
export const APP_KEY = 'APPKEY';

/**
 * Gets an item with the specified key from the browser's local storage.
 * @param key The key of the item to retrieve.
 * @returns The value of the item, if found, or undefined.
 */
export function getStorageItem(key: string): unknown | undefined {
  if (typeof window === 'undefined') return;

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);

  return JSON.parse(data!);
}

/**
 * Sets an item with the specified key and value in the browser's local storage.
 * @param key The key of the item to set.
 * @param value The value of the item to set.
 */
export function setStorageItem(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify(value);

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
