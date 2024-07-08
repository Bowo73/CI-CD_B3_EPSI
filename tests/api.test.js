const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api'); // Assurez-vous que le chemin d'accès à votre API est correct

chai.use(chaiHttp);
const expect = chai.expect;

describe('Currency Conversion API', () => {
  it('should convert currencies correctly', (done) => {
    chai.request(app)
      .post('/convert')
      .send({ amount: 100, from: 'USD', to: 'EUR' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.convertedAmount).to.be.greaterThan(0);
        done();
      });
  });

  it('should return error for invalid currency', (done) => {
    chai.request(app)
      .post('/convert')
      .send({ amount: 100, from: 'USD', to: 'XYZ' })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal('Invalid currency code');
        done();
      });
  });
});
