import { get, patch, post, del } from '@/utils/https';
import { ICreateTransaction } from '@/pages/Trans/Forms/types';

export async function queryGetTransactions(payload: string): Promise<any> {
  return get({ url: `/transaction/owner/${payload}` });
}

export async function queryCreateTransaction(
  payload: ICreateTransaction,
): Promise<any> {
  console.log(payload);
  return post({ url: `/transaction/`, data: payload });
}
