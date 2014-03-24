
var exif = require('..');

var chai = require('chai');
var expect = chai.expect;
chai.config.includeStack = true; // defaults to false

describe('exif(file, fn)', function(){

  it('respond with EXIF json data', function(done){
    exif('test/fixtures/forest.jpeg', function(err, data){
      if (err) return done(err);
      expect(data, 'FileName').to.have.property('FileName', 'forest.jpeg');
      expect(data, 'width').to.have.property('ImageWidth', 900);
      done();
    });
  });

  it('doesn\'t wreck utf-8 data', function(done){
    exif('test/fixtures/forest.jpeg', function(err, data){
      if (err) return done(err);
      expect(data, 'caption').to.have.property('Caption-Abstract', 'Voilà l\'été !');
      expect(data, 'copyright').to.have.property('CopyrightNotice', '©photo : John Smith');
      done();
    });
  });

});
