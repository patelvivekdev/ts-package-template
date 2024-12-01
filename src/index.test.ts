import { describe, it, expect } from 'vitest';
import Calculator, { greet } from './index';

// FILE: src/index.test.ts

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(-1, -1)).toBe(-2);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, -3)).toBe(6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });
});

describe('greet', () => {
  it('should return a greeting message', () => {
    expect(greet('John')).toBe(
      'Hello, John! Welcome to the TypeScript package.',
    );
    expect(greet('Jane')).toBe(
      'Hello, Jane! Welcome to the TypeScript package.',
    );
  });
});
