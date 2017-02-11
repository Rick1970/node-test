const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();//add done keyword on async test
      });
    });
  });
  describe('#square', () => {
    it('should async square a number', (done) => {
      utils.asyncSquare(3, (sum) => {
        expect(sum).toBe(9).toBeA('number');
        done();
      });
    });
    it('should square a number', () => {
      let res = utils.square(5);
      expect(res).toBe(25).toBeA('number');
    });
  });
  describe('#names', () => {
    it('should verify firstName, and lastName are set', () => {
      //setup
      let fullName = 'Rick Thornbrugh';
      let user = {
        age: 46,
        location: 'Seattle, WA.'
      };
      //test
      utils.setName(user, fullName);
      expect(user.firstName).toEqual('Rick');
      expect(user.lastName).toEqual('Thornbrugh');
      expect(user).toBeA('object');
    });
    it('should verify firstName, and lastName are set 2', () => {
      let user = {age: '46', location: 'Seattle'};
      let res = utils.setName(user, 'Rick Thornbrugh');
      expect(res).toInclude({firstName: 'Rick', lastName: 'Thornbrugh'}).toBeA('object');
    });
  });
});


// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({
//   //   name: 'Rick'
//   // }).toEqual({
//   //   name: 'Rick'
//   // });
//   // expect([2, 3, 4]).toInclude(4);
//   expect({
//     name: 'Rick',
//     age: 46,
//     job: 'Student'
//   }).toInclude({name: 'Rick'});
// });
