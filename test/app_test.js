/* const chai = require("chai");
const chaihttp = require("chai-http");
const app = require("../src/routes/index");
const expect = require('chai').expect;
const fetch = require('node-fetch');

var supertest = require("supertest");
var should = require("should");


chai.use(chaihttp);
chai.should();
const server = supertest.agent('http://localhost:3000'); */

const server = require("../src/routes/index");
const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

/* describe('API REST', function () {
    it('GET /users debe devolver todos los usuarios', function (donde) {
        server
            .get("/cotizacion")
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.body.error.should.equal(false);
                done();
            });

    });
});

describe('get all countries: ', () => {

    it('should get all countries', (done) => {
        chai.request(server)
            .get('/cotizacion')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

});

describe('/GET book', () => {
    it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/cotizacion')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });
});
 */

/* describe('API REST', function () { 
    it('GET /cotizacion', async () => {

        const response = await fetch('http://localhost:3000/cotizacion');
        expect(response.status).to.be.equal(200);

        const cotiz = await response.json();
        //expect(cotiz.body).equal({ "title": "Hello World"});
       
    });
}); */

describe('Checking whether the response return status 200', function () {
    it('Status OK', async function (done) {
        const { res, err } = await chai.request(server).get('/cotizacion');
        expect(res.status).to.be.equal(200);
        //expect(res.body.message).to.equal('hello world');
    });
});