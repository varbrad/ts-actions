import { reducer } from './store';
import { initialState } from './state';
import { Actions } from './actions';

const finalState = [
  Actions.addValue(20),
  Actions.addValue(40),
  Actions.clearValues(),
  Actions.addValue(50),
  Actions.addValue(20),
  Actions.addValues(20, 50, 90, 20),
].reduce(reducer, initialState);

console.log(finalState.values);
