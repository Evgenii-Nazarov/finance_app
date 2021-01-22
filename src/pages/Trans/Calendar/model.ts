import { Effect, Reducer } from 'umi';
import defaultReducers from '@/pages/utils/defaultReducers';
import { queryGetTransactions } from '@/pages/Trans/Calendar/queries';

export interface IState {}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    close: Effect;
    open: Effect;
    getTransactions: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    reset: Reducer<IState>;
  };
}

const Model: IModel = {
  namespace: 'Calendar',

  state: {
    open: false,
  },

  effects: {
    *getTransactions({ payload }, { call, put }) {
      const data = yield call(queryGetTransactions, payload);
      console.log(data);
    },

    *close(_, { put }) {
      yield put({ type: 'reset' });
    },

    *open({ payload }, { put }) {
      yield put({ type: 'save', payload: { open: true, ...payload } });
    },
  },

  reducers: {
    ...defaultReducers,

    reset() {
      return {
        open: false,
      };
    },
  },
};

export default Model;
