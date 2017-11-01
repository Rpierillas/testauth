/*
 * Npm Import
 */
import { should } from 'chai';


/*
 * Local Import
 */
import reducer from 'src/store/reducer';


/*
 * Code
 */
should();


/*
 * Code
 */
describe('Reducer', () => {
  it('should be a function', () => {
    reducer.should.to.be.a('function');
  });

  it('should return an object', () => {
    reducer().should.be.an('object');
  });
});
