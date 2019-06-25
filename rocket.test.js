
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      // arrange
      // act
      let rocket = new Rocket();
      // assert
      expect(rocket.options).toBe();
    });

    test("it should set the rocket's name if provided", () => {
      // arrange
      // act
      let rocket = new Rocket({name: 'Over The Moon'});
      // assert
      expect(rocket.name).toBe('Over The Moon');
    });
    test("It should set set the rocket's colour if provided", () => {
      // arrange
      // act
      let rocket = new Rocket({colour: 'teal'});
      // assert
      expect(rocket.colour).toBe('teal');
    });
    test("It should set set the rocket's flying status if provided", () => {
      // arrange
      // act
      let rocket = new Rocket({flying: true});
      // assert
      expect(rocket.flying).toBeTruthy();
    });
  });

  describe('liftOff', () => {
    test("It should set Flying to true if false", () => {
      // arrange
      let rocket = new Rocket({flying: false});
      // act
      rocket.liftOff()
      // assert
      expect(rocket.flying).toBeTruthy();
    });
    test("It should return false if Flying is set to true", () => {
      // arrange
      let rocket = new Rocket({flying: true});
      // act
      let result = rocket.liftOff()
      // assert
      expect(result).toBeFalsy();
    });
    test('It should return true if Flying is set to false', () => {
      // arrange
      let rocket = new Rocket({flying: false});
      // act
      let result = rocket.liftOff()
      // assert
      expect(result).toBeTruthy();
    })
  });

  describe('land', () => {
    test('It should set Flying to false if true', () => {
      // arrange
      let rocket = new Rocket({flying: true});
      // act
      rocket.land();
      // assert
      expect(rocket.flying).toBeFalsy();
    });
    test('It should return false if Flying is set to false', () => {
      // arrange
      let rocket = new Rocket({flying: false});
      // act
      let result = rocket.land();
      // assert
      expect(result).toBeFalsy();
    });
    test('It should return true if Flying is set to true', () => {
      // arrange
      let rocket = new Rocket({flying: true});
      // act
      let result = rocket.land();
      // assert
      expect(result).toBeTruthy();
    });
  });

  describe('status', () => {
    test('It should return `Rocket ${this.name} is flying through the sky!` if flying is set to true', () => {
      // arrange
      let rocket = new Rocket({name: 'Eva 01', flying: true});
      // act
      let result = rocket.status();
      // assert
      expect(result).toEqual(`Rocket Eva 01 is flying through the sky!`);
    });
    test('It should return `Rocket ${this.name} is ready for liftoff!` if flying is set to false', () => {
      // arrange
      let rocket = new Rocket({name: 'Eva 02', flying: false});
      // act
      let result = rocket.status();
      // assert
      expect(result).toEqual(`Rocket Eva 02 is ready for liftoff!`);
    });
  });

  describe('sendCodedSignal', () => {
    test('It should return boop if messageCode is undefined', () => {
      // arrange
      let rocket = new Rocket();
      // act
      let result = rocket.sendCodedSignal();
      // assert
      expect(result).toBe('boop');
    });
    test('It should return beep if messageCode is less than 10 and flying is set to false', () => {
      // arrange
      let rocket = new Rocket();
      // act
      let result = rocket.sendCodedSignal(6);
      // assert
      expect(result).toBe('beep');
    });
    test('It should return beep beep if messageCode is less than 10 and flying is set to true', () => {
      // arrange
      let rocket = new Rocket({flying: true});
      // act
      let result = rocket.sendCodedSignal(6);
      // assert
      expect(result).toBe('beep beep');
    });
    test('It should return boop beep beep if messageCode is 10 or higher and flying is set to false', () => {
      // arrange
      let rocket = new Rocket();
      // act
      let result = rocket.sendCodedSignal(10);
      // assert
      expect(result).toBe('boop beep beep');
    });
    test('It should return boop boop boop if messageCode is 10 or higher and flying is set to true', () => {
      // arrange
      let rocket = new Rocket({flying: true});
      // act
      let result = rocket.sendCodedSignal(12);
      // assert
      expect(result).toBe('boop boop boop');
    });
  });

});
