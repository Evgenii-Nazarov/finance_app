import { Effect, Reducer } from 'umi';
import { get } from 'lodash';
import defaultReducers from '@/pages/utils/defaultReducers';
import {
  queryCreateTransaction,
  queryGetTransactions,
} from '@/pages/Trans/Calendar/queries';

export interface IState {}

export interface IModel {
  namespace: string;
  state: IState;
  effects: {
    getTransactions: Effect;
    createTransaction: Effect;
  };
  reducers: {
    save: Reducer<IState>;
    reset: Reducer<IState>;
  };
}

const Model: IModel = {
  namespace: 'Calendar',

  state: {},

  effects: {
    *getTransactions({ payload }, { call, put }) {
      const data = yield call(queryGetTransactions, payload);
      yield put({ type: 'save', payload: { transactions: data } });
    },

    *createTransaction({ payload }, { call, put }) {
      const owner = get(payload, 'owner', '');
      yield call(queryCreateTransaction, payload);
      yield put({ type: 'getTransactions', payload: owner });
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
