if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
  var fixtures = require('./fixtures');
}

describe('Fake', function () {
  it('should return fake methods passed to it', function () {
    var name = ngfaker.fake('{{name.prefix}} {{name.firstName(0)}} {{name.lastName}}');
    var nameParts = name.split(' ');
    expect(nameParts.length).toEqual(3);
  });

  it('should return string back if no moustache is found', function () {
    var name = ngfaker.fake('bolaji');
    expect(name).toEqual('bolaji');
  });

  it('should return throw an error if method doesn\'t exist', function () {
    function catchError() {
      ngfaker.fake('{{name.push}}');
    }
    expect(catchError).toThrow();
    expect(catchError).toThrowError('Invalid method: name.push');
  });

  it('should return throw an error if module doesn\'t exist', function () {
    function catchError() {
      ngfaker.fake('{{block.push}}');
    }
    expect(catchError).toThrow();
    expect(catchError).toThrowError('Invalid module: block');
  });

  it('should return an error string when a non-string is passed', function () {
    var fakeStuff = ngfaker.fake(2)
    expect(fakeStuff).toEqual('string parameter is required!');
  });
});
