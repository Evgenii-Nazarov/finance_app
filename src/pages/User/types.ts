export interface IUserAccount {
  _id?: string;
  firstName?: string;
  lastName?: string;
  roles?: string[];
  active?: boolean;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  expenseTypes?: IExpenseType[];
  incomeTypes?: IIncomeType[];
}

export interface IExpenseType {
  _id?: string;
  name?: string;
  parent?: boolean;
  parentId?: string;
}

export interface IIncomeType {
  _id?: string;
  name?: string;
  parentId?: string;
  childrenId?: string;
}
