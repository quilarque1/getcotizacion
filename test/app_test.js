const expect = require('chai').expect;
const request = require('request');
const server = 'http://localhost:3000';


describe('get cotizacion: ', () => {
    it('should get cotizacion', (done) => {
        request.get(server + '/cotizacion',
        function (err, response, body ) {

            var bodyObj = JSON.parse(body);
            expect(bodyObj.title).to.equal('Hello World');
            expect(response.statusCode).to.equal(200);
            // console.log('--> ' + body);                         
            done();
        });
    });
});