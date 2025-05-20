import { Injector } from '@angular/core';
import { AppErrorHandler } from './app-error-handler';

describe('AppErrorHandler', () => {
  it('should create an instance', () => {
    const mockInjector = {} as Injector;
    expect(new AppErrorHandler(mockInjector)).toBeTruthy();
  });
});