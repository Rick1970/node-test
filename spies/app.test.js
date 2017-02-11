const expect = require('expect');
const rewire =require('rewire');

var app = rewire('./app');


describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Rick', 46);
    expect(spy).toHaveBeenCalledWith('Rick', 46);
  });
  it('should call  saveUser with user object', () => {
    var email = 'rick@example.com';
    var password = 'cool1';
    app.handleSignup(email, password);
    expect (db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
