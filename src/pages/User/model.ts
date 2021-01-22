import { Effect, Reducer } from 'umi';
import { IUserAccount } from '@/pages/User/types';
import { userList } from './demoData';
import defaultReducers from '@/pages/utils/defaultReducers';

export interface IModel {
  namespace: string;
  state: IUserAccount;
  effects: {
    setUser: Effect;
    reset: Effect;
  };
  reducers: {
    save: Reducer<IUserAccount>;
    set: Reducer<IUserAccount>;
  };
}

const UserModel: IModel = {
  namespace: 'User',

  state: userList[0],

  effects: {
    *setUser({ payload }, { call, put }) {
      yield put({ type: 'save', payload: { successMessage: true } });
    },

    *reset(_, { put }) {
      yield put({ type: 'set', payload: {} });
    },
  },

  reducers: {
    ...defaultReducers,
  },
};

export default UserModel;
