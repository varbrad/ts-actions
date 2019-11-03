import { reducer } from './store';
import { initialState } from './state';
import { Actions } from './actions';

const finalState = [
  Actions.addValue(20),
  Actions.addValue(40),
  Actions.clearValues(),
  Actions.addValue(90),
].reduce(reducer, initialState);

console.log(finalState);

describe('reducer', () => {
  it('should add a value', () => {
    const state = reducer(initialState, Actions.addValue(20));
    expect(state.values).toEqual([20]);
  });

  it('should be a reducer', () => {
    const state = [
      Actions.addValue(3),
      Actions.addValue(2),
      Actions.addValue(1),
    ].reduce(reducer, initialState);
    expect(state.values).toEqual([3, 2, 1]);
  });
});
