import { actionCreator, ActionsUnion } from './genericActions';

export const ADD_VALUE = 'ADD_VALUE';
export const ADD_VALUES = 'ADD_VALUES';
export const CLEAR_VALUES = 'CLEAR_VALUES';

/**
 * A map of all the action creators
 */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const Actions = {
  addValue: (value: number) => actionCreator(ADD_VALUE, value),
  addValues: (...values: number[]) => actionCreator(ADD_VALUES, values),
  clearValues: () => actionCreator(CLEAR_VALUES),
};
/* eslint-enable @typescript-eslint/explicit-function-return-type */

export type Action = ActionsUnion<typeof Actions>;
