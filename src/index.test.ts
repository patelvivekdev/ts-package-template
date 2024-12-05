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

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(calculator.subtract(3, 2)).toBe(1);
      expect(calculator.subtract(-1, -1)).toBe(0);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, -3)).toBe(6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(-6, -3)).toBe(2);
      expect(calculator.divide(0, 5)).toBe(0);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
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
