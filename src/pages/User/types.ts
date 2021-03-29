export interface IUserAccount {
  _id?: string;
  firstName?: string;
  lastName?: string;
  roles?: string[];
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  transactionTypes?: ITransactionType[];
}

export interface ITransactionType {
  _id?: string;
  type?: string;
  name?: string;
  parent?: boolean;
  parentId?: string;
}
