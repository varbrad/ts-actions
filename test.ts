interface Action<T extends string> {
  type: T;
}

interface PayloadAction<T extends string, P> extends Action<T> {
  payload: P;
}

function actionCreator<T extends string>(type: T): Action<T>;
function actionCreator<T extends string, P>(
  type: T,
  payload: P,
): PayloadAction<T, P>;
function actionCreator<T extends string, P>(
  type: T,
  payload?: P,
): Action<T> | PayloadAction<T, P> {
  if (payload === undefined) return { type };
  return { type, payload };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FuncType = (...args: any[]) => any;
type ActionMap = { [actionCreator: string]: FuncType };
type ActionsUnion<A extends ActionMap> = ReturnType<A[keyof A]>;

const SET_VALUE = 'SET_VALUE';
const CLEAR_VALUE = 'CLEAR_VALUE';

type SetValueAction = { type: typeof SET_VALUE; payload: number };
type ClearValueAction = { type: typeof CLEAR_VALUE };

export const Actions = {
  setValue: (value: number): SetValueAction => actionCreator(SET_VALUE, value),
  clearValue: (): ClearValueAction => actionCreator(CLEAR_VALUE),
};

export type Actions = ActionsUnion<typeof Actions>;
