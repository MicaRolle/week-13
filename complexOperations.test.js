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

//*FUNTIONS MOCK*//

describe('Mock: ComplexOperations',() =>{
  describe('Mock: checkEmail',() =>{
    beforeEach(()=> {
      jest.restoreAllMocks()
    });
    it('Mock: null email', () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(null);
      expect(complexOperations.checkEmail('mocked')).toBe('The email is invalid');
    });
    it('Mock: undefined email',() =>{
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(undefined);
      expect(complexOperations.checkEmail('mocked')).toBe('The email is invalid');
    }); 
    it('Mock:correct email',() =>{
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue('mica@gmail.com');
      expect(complexOperations.checkEmail('mocked')).toBe('The email is valid');
    });    
  });

  describe('Mock: Calculate Area',() =>{
    beforeEach(()=> {
      jest.restoreAllMocks()
    });
    it('Mock: undefined figure',() =>{
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(undefined);
      expect(complexOperations.calculateArea('triangle',0,0)).toBe('triangle is not supported');
    });
    it('Mock: default figure',() =>{
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue('default');
      expect(complexOperations.calculateArea('default',0,0)).toBe('default is not supported');
    });
    it('Mock:Area in Square',() =>{
      jest.spyOn(basicOperations, 'multip').mockReturnValue(10);
      expect(complexOperations.calculateArea('square',0,0)).toBe(10);
    });
    it('Mock:Area in Rectangle',() =>{
      jest.spyOn(basicOperations, 'multip').mockReturnValue(15);
      expect(complexOperations.calculateArea('rectangle',0,0)).toBeCloseTo(15);
    });
    it('Mock:Area in Circle-exponent',() =>{
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(10);
      expect(complexOperations.calculateArea('circle',0,0)).toBeCloseTo(31.41592653589793);
    });
  });
  describe('Mock: SumGreaterThan',() =>{
    beforeEach(()=> {
      jest.restoreAllMocks()
    });
    it('Mock: parameter undefined',() =>{
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(undefined);
      expect(complexOperations.sumGratherThan(10,20,40)).toBe('The params should be numbers');
    });
    it('Mock: sum to be greater than third number',() =>{
     jest.spyOn(basicOperations, 'sum').mockReturnValue('100');
     expect(complexOperations.sumGratherThan(0,0,10)).toBe('100 is grather than 10');
    });
    it('Mock: sum to be less than third number',() =>{
      jest.spyOn(basicOperations, 'sum').mockReturnValue('5');
      expect(complexOperations.sumGratherThan(0,0,10)).toBe('5 is less than 10');
    })      
  });
  describe('Mock: Array-Match',() =>{
    beforeEach(()=> {
      jest.restoreAllMocks()
    });
    it('Mock:undefined array',() =>{
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
      expect(complexOperations.intersectionBetweenArrays([10,15,20],[20,25,330])).toBe('The params should be arrays');
    });
    it('Mock: null array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(null);
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });
    it('Mock: no match funtion',() =>{
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([]);
      expect(complexOperations.intersectionBetweenArrays([1,2,3],[4,5,6])).toBe('There are not matching elements');
    });
    it('Mock: match funtion', () => {
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([10, 5, 1]);
      expect(complexOperations.intersectionBetweenArrays([], [])).toStrictEqual([10, 5, 1]);
    });

  describe('Mock: sortArrayOfObjectsByKey ',() =>{
    beforeEach(()=> {
      jest.restoreAllMocks()
    });
   
    it('Mock: string undefined',() =>{
      jest.spyOn(basicOperations, 'isString').mockReturnValue(undefined);
      expect(complexOperations.sortArrayOfObjectsByKey([{key:1},{key:2},{key:3}],'key'))
      .toBe('The second param should be an string');
    });
    it('Mock:sortArrayByKey to match',() =>{
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(
      [{fruit:'apple'},{fruit:'orange'},{fruit:'pear'}],'fruit');
      expect(complexOperations.sortArrayOfObjectsByKey([{key:1},{key:2},{key:3}],'key'))
      .toEqual([{fruit:'apple'},{fruit:'orange'},{fruit:'pear'}]);
    });
  });
  describe('Mock: sortArrayOfObjectsByKey ',() =>{
    beforeEach(()=> {
      jest.restoreAllMocks()
    });
    it('Mock:undefined-1',() =>{
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined);
      expect(complexOperations.numberOfOddAndEvenNumbers([20,30,40])).toBe('The param should be an array');
    });
    it('Mock:undefined-2',() =>{
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(undefined);
      expect(complexOperations.numberOfOddAndEvenNumbers([50,60,70])).toBe('The array should have only numbers');
    });
    it('Mock:only odds',() =>{
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,7,9,11]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,7,9])).toEqual(
      {odd:4, even:0});
    });
    it('Mock:only even',() =>{
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([2,4,6,8]);
      expect(complexOperations.numberOfOddAndEvenNumbers([2,4,6])).toEqual(
      {odd:4, even:3});
    });
    it('Mock: even and odd',() =>{
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,3,5,7]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2,4,6,8,10]);
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3])).toEqual({odd:4, even:5});
    });
  });
});
});

