/*
 * Npm Import
 */
import { should } from 'chai';


/*
 * Local Import
 */
import store from 'src/store';


/*
 * Code
 */
should();


/*
 * Code
 */
describe('Store', () => {
  it('should be an object', () => {
    store.should.to.be.an('object');
  });

  it('should have a property getState', () => {
    store.should.have.a.property('getState');
  });

  it('should have a property dispatch', () => {
    store.should.have.a.property('dispatch');
  });
});
