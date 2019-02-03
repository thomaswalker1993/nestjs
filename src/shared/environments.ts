import { Component } from '@nestjs/common';

import * as packageInfo from '../../package.json';

@Component()
export class Environments {
  public static getEnv(): string {
    return process.env.NODE_ENV || 'development';
  }

  public static getPackageInfo(): any {
    return packageInfo;
  }

  public static isTest(): boolean {
    return this.getEnv() === 'test';
  }

  public static isDev(): boolean {
    return this.getEnv() === 'development';
  }

  public static isProd(): boolean {
    return this.getEnv() === 'production';
  }

  public static getRedisHost(): string {
    return process.env.REDIS_HOST;
  }

  public static getRedisPort(): string {
    return process.env.REDIS_HOST;
  }

  public static isEnabled(bool: string): boolean {
    try {
      return bool.toLowerCase() === 'true';
    } catch (e) {
      return false;
    }
  }
}
