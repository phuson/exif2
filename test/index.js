
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

  it('handles too big metadata with a clear error message', function(done){
    // real case taken from :
    // http://fr.phaidon.com/store/photography/le-livre-de-photographies-une-histoire-vol-3-9780714867755/
    exif('test/fixtures/le_livre_de_photographies_vol_III_Phaidon.jpg', function(err){
      expect( err ).to.be.an.instanceof(Error);
      expect( err ).to.have.property('message', 'Metadata too big !');
      done();
    });
  });

  it('allows handling huge metadatas through special options', function(done){
    // we use the special exec option to ease limitations
    exif('test/fixtures/le_livre_de_photographies_vol_III_Phaidon.jpg', {
      maxBuffer: 1024*1024
    },
    function(err, data) {
      if (err) return done(err);
      expect(data).to.have.property('YCbCrSubSampling', 'YCbCr4:4:4 (1 1)');
      done();
    });
  });

});
