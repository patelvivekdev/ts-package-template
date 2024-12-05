import type { calculator } from './types';

/**
 * A simple calculator class demonstrating TypeScript package functionality
 */
export class Calculator implements calculator {
  /**
   * Adds two numbers together
   * @param a First number
   * @param b Second number
   * @returns Sum of the two numbers
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtracts two numbers
   * @param a First number
   * @param b Second number
   * @returns Difference of the two numbers
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiplies two numbers
   * @param a First number
   * @param b Second number
   * @returns Product of the two numbers
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divides two numbers
   * @param a First number
   * @param b Second number
   * @returns Quotient of the two numbers
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

/**
 * A utility function to greet users
 * @param name Name of the person to greet
 * @returns Greeting message
 */
export function greet(name: string): string {
  return `Hello, ${name}! Welcome to the TypeScript package.`;
}

// Export default Calculator for convenience
export default Calculator;
