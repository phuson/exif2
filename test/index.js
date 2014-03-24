
var exif = require('..');
var assert = require('better-assert');

describe('exif(file, fn)', function(){

  it('respond with EXIF json data', function(done){
    exif('test/fixtures/forest.jpeg', function(err, o){
      if (err) return done(err);
      assert('forest.jpeg' === o['FileName']);
      done();
    });
  });

  it('doesn\'t wreck utf-8 data', function(done){
    exif('test/fixtures/forest.jpeg', function(err, o){
      if (err) return done(err);
      assert(o['Caption-Abstract'] === 'Voilà l\'été !');
      assert(o['CopyrightNotice'] === '©photo : John Smith');
      done();
    });
  });

});
