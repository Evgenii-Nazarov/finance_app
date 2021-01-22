export interface IDrawer {
  title: string;
  form: string;
  visible: boolean;
  width?: number | string;
  data?: {};

  [key: string]: any;
}
