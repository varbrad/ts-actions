(function (immer) {
  'use strict';

  function actionCreator(type, payload) {
      if (payload === undefined)
          return { type: type };
      return { type: type, payload: payload };
  }

  var ADD_VALUE = 'ADD_VALUE';
  var CLEAR_VALUES = 'CLEAR_VALUES';
  /**
   * A map of all the action creators
   */
  /* eslint-disable @typescript-eslint/explicit-function-return-type */
  var Actions = {
      addValue: function (value) { return actionCreator(ADD_VALUE, value); },
      clearValues: function () { return actionCreator(CLEAR_VALUES); },
  };

  var reducer = function (state, action) {
      return immer.produce(state, function (draft) {
          switch (action.type) {
              case ADD_VALUE:
                  draft.values.push(action.payload);
                  break;
              case CLEAR_VALUES:
                  draft.values = [];
                  break;
          }
      });
  };

  var initialState = {
      values: [],
      key: 'default',
  };

  var finalState = [
      Actions.addValue(20),
      Actions.addValue(40),
      Actions.clearValues(),
      Actions.addValue(90),
  ].reduce(reducer, initialState);
  console.log(finalState);

}(immer));
