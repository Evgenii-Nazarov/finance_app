import { get, patch, post, del } from '@/utils/https';

export async function queryGetTransactions(payload: string): Promise<any> {
  return get({ url: `/transaction/owner/${payload}` });
}
