const transactionTypes = [
  {
    _id: '29f87e791ca64501afb4b57c6993c1df',
    name: 'Food',
    type: 'expense',
    parent: true,
  },
  {
    _id: '71752abbcab944e5b09ee5c650d30bcc',
    type: 'expense',
    name: 'Lunch',
    parent: false,
    parentId: '29f87e791ca64501afb4b57c6993c1df',
  },
  {
    _id: 'a5d68d64b9eb490b99d5de2ec97b5e97',
    type: 'expense',
    name: 'Diner',
    parent: false,
    parentId: '29f87e791ca64501afb4b57c6993c1df',
  },

  {
    _id: 'ff0cf2f3a78d40a7ae51ff6b560a9f37',
    type: 'expense',
    name: 'Household',
    parent: true,
  },
  {
    _id: '9678b561c2aa4536b7ea7379004d71f2',
    type: 'expense',
    name: 'Appliances',
    parent: false,
    parentId: 'ff0cf2f3a78d40a7ae51ff6b560a9f37',
  },
  {
    _id: '9678b561c2aa4536b7ea7379004d71f3',
    type: 'income',
    name: 'Salary',
    parent: true,
  },
  {
    _id: '9678b561c2aa4536b7ea7379004d71f4',
    type: 'income',
    name: 'Stocks',
    parent: true,
  },
  {
    _id: '9678b561c2aa4536b7ea7379004d71f5',
    type: 'income',
    name: 'Estate',
    parent: true,
  },
];

export const userList = [
  {
    _id: '6006003489dc3ae63368e1bd',
    firstName: 'Eugene',
    lastName: 'Nazarov',
    roles: ['admin'],
    email: 'qwe@qwe.qwe',
    transactionTypes,
  },
];
