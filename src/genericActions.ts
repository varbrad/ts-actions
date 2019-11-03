interface Action<T extends string> {
  type: T;
}

interface PayloadAction<T extends string, P> extends Action<T> {
  payload: P;
}

export function actionCreator<T extends string>(type: T): Action<T>;
export function actionCreator<T extends string, P>(
  type: T,
  payload: P,
): PayloadAction<T, P>;
export function actionCreator<T extends string, P>(
  type: T,
  payload?: P,
): Action<T> | PayloadAction<T, P> {
  if (payload === undefined) return { type };
  return { type, payload };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FuncType = (...args: any[]) => any;
type ActionMap = { [actionCreator: string]: FuncType };
export type ActionsUnion<A extends ActionMap> = ReturnType<A[keyof A]>;
