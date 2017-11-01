/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import { checkTask, createTask } from 'src/store/reducer';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  count: state[ownProps.name],
});

// Actions
const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    checkTask: () => {
      dispatch(checkTask());
    },
    createTask: () => {
      dispatch(createTask());
    },
  },
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);


/*
 * Export default
 */
export default ExampleContainer;
