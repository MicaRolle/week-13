import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

//* INTEGRATION TEST *//

describe('complexOperation - INTEGRATION TEST', () => {
  
  describe('checkEmail', () => {
    it('The email should be a string', () => {
      expect(complexOperations.checkEmail()).toMatch('The email should be an string');      
    });
    it('if email cell it is empty should show the messege', () => {
      expect(complexOperations.checkEmail("")).toBe('The email should be an string');
    });
    it('if email it is incomplete show the messege', () => {
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    });
    it('If the user input an invalid email address', () => {
      expect(complexOperations.checkEmail('notAnEmail@not')).toBe('The email is invalid')
    });    
    it('If the user input an invalid email address', () => {
      expect(complexOperations.checkEmail('juan@.')).toBe('The email is invalid');
    });
    it('if email is valid show the correct mssg', () => {
      expect(complexOperations.checkEmail('rollemica@gmail.com')).toBe('The email is valid');
    });
  });

  //* CALCULATE AREA *//

  describe('calculateArea', () => {
    it('function without parameters', () => {
      expect(complexOperations.calculateArea()).toMatch('undefined is not supported')
    });
    it('The figure it is non supported', () => {
      expect(complexOperations.calculateArea('hexagon',10,5)).toBe('hexagon is not supported');
    });
    it('The numbers one and numbers two are not a numbers', () => {
      expect(complexOperations.calculateArea('square',)).toBe('number1 and number2 should be numbers');
    }); 
    it('if number2 is not a number', () => {
      expect(complexOperations.calculateArea('square',10,'string')).toBe('number1 and number2 should be numbers');
    });
    it('square area to be 25', () => {
      expect(complexOperations.calculateArea('square', 5, 5)).toBe(25);
    });
    it('rectangle area to be 10', () => {
      expect(complexOperations.calculateArea('rectangle', 5, 2)).toBe(10);
    });
    it('triangle area to be 25', () => {
      expect(complexOperations.calculateArea('triangle', 10, 5)).toBe(25);
    });
    it('circle area to be 314 ', () => {
      expect(complexOperations.calculateArea('circle', 10)).toBe(314.1592653589793);
    });
  });

  //* SUMA Y COMPARACION *//

  describe('sumGratherThan', () => {
    it('function without parameters', () => {
      expect(complexOperations.sumGratherThan()).toMatch('The params should be numbers');
    });
    it('if params are not numbers', () => {
      expect(complexOperations.sumGratherThan('string', 'string', 'string')).toMatch('The params should be numbers');
    });
    it('Sum number1 and number2 should be grather than number3', () => {
      expect(complexOperations.sumGratherThan(100,200,50)).toBe('300 is grather than 50');
    });
    it('Sum number1 and number2 is less than number3', () => {
      expect(complexOperations.sumGratherThan(10,20,50)).toBe('30 is less than 50');
    });
  });

  //* INTERSECCION BETTWEN TWO ARRAYS//*

  describe('intersectionBetweenArrays', () => {
    it('function without parameters', () => {
      expect(complexOperations.intersectionBetweenArrays()).toMatch('The params should be arrays');
    });
    it('Using numbers as parameters', () => {
      expect(complexOperations.intersectionBetweenArrays(10,20)).toBe('The params should be arrays');
    });
   
    it('The arrays havent got matching elements', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3],[4,5,6])).toBe('There are not matching elements');
    });
    it('the arrays have got a matching elements:Mica', () => {
      expect(complexOperations.intersectionBetweenArrays(['Mica','Leti','Flor'],['Chechu','Mica','Meli'])).toContainEqual('Mica');
    });
  });
  //* ARRAY ++ STRINGS **//

  describe('sortArrayOfObjectsByKey', () => {
    it('function without parameters', () => {
      expect(complexOperations.sortArrayOfObjectsByKey()).toMatch('The first param should be an array');
    });
    it('First parameter it is Undefined', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(undefined,'Mica')).toBe('The first param should be an array');
    });
    it('Second parameter is undefined', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Micaela'}],undefined)).toBe('The second param should be an string');
    });
    it('return the correct array ', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{fruit:'apple'},{fruit:'orange'},{fruit:'pear'}],'fruit')).toEqual([{fruit:'apple'},{fruit:'orange'},{fruit:'pear'}]);   
    });
  });

  //* ODD AND EVEN NUMBERS *//
  describe('numberOfOddAndEvenNumbers', () => {
    it('function without parameters', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toMatch('The param should be an array');
    });
    it('If the parameter it is a string', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('string')).toBe('The param should be an array');
    });
    it('If one parametes it is a string', () => {
      expect(
        complexOperations.numberOfOddAndEvenNumbers([10, { fruit: 'apple' }])).toMatch("The array should have only numbers");
    });
    it('The array have got positives numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([10,20,30,40,50])).toEqual({odd:0, even:5});
    });
    it('The array have got negative numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([-10,-5,-30,-45,50])).toEqual({odd:2, even:3});
    });
    it('The array have got all even numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([2,4,6,8,10])).toEqual({odd:0, even:5});
    });
    it('The array have got all odd numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([3,5,7,9,11])).toEqual({odd:5, even:0});
    });
  });
});


