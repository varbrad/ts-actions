import { produce } from 'immer';
import { Action, ADD_VALUE, CLEAR_VALUES, ADD_VALUES } from './actions';
import { State } from './state';

export const reducer = (
  state: Readonly<State>,
  action: Readonly<Action>,
): State =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_VALUE:
        draft.values.push(action.payload);
        break;
      case CLEAR_VALUES:
        draft.values = [];
        break;
      case ADD_VALUES:
        draft.values.push(...action.payload);
        break;
    }
  });
