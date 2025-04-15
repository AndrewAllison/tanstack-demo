import { describe, expect, it } from 'vitest';
import { formatDate, isProduction } from './index';

describe(`utils tests`, () => {
  it(`formats date`, () => {
    const date = new Date(`2023-01-01T00:00:00.000Z`);
    expect(formatDate(date)).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
  });
  
  it(`detects production env`, () => {
    process.env.NODE_ENV = `production`;
    expect(isProduction()).toBe(true);
    process.env.NODE_ENV = `test`;
    expect(isProduction()).toBe(false);
  });
});
