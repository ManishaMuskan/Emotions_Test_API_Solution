const expect = require('expect');
const request = require('supertest');

const {
  app
} = require('./../server');
var {
  Location
} = require('./../models/location');

beforeEach(function(done) {
  this.timeout(15000);
  Location.remove({}).then(() => done());
});

describe('POST /tag/location', () => {

  it('should tag a emotion to location for particular user', function(done) {
    this.timeout(15000);

    var lat = 28.5967439;
    var lng = 77.3285038;
    var emotion = "happy";

    request(app)
      .post('/tag/location')
      .send({
        lat,
        lng,
        emotion
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.emo_tagged.emotion).toBe(emotion);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Location.find().then((locations) => {
          expect(locations.length).toBe(1);
          expect(locations[0]._id).toExist();
          done();
        }).catch((e) => done(e));
      });

  });

  it('should return validation error if proper request not sent', function(done) {
    this.timeout(15000);

    //missing property name or not in the following vars
    var lat = 28.5967439;
    var long = 77.3285038;
    var emotion = "happy";

    request(app)
      .post('/tag/location')
      .send({
        lat,
        long,
        emotion
      })
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Location.find().then((locations) => {
          expect(locations.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });

  });

  it('should return validation error if coordinates are not valid', function(done) {
    this.timeout(15000);

    var lat = 0;
    var lng = 0;
    var emotion = "happy";

    request(app)
      .post('/tag/location')
      .send({
        lat,
        lng,
        emotion
      })
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Location.find().then((locations) => {
          expect(locations.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });

  });

});