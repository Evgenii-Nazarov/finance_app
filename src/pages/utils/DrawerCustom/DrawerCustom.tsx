import { Drawer } from 'antd';
import React from 'react';
import { connect } from 'umi';
import { IDrawer } from '@/pages/utils/DrawerCustom/types';
import AddForm from '@/pages/Trans/Forms/AddForm/AddForm';

function formMap(form: any) {
  switch (form) {
    case 'AddForm':
      return <AddForm />;

    default:
      return null;
  }
}

interface IProps {
  close: () => void;
  DrawerData: IDrawer;
}

const DrawerCustom = (props: IProps) => {
  const { DrawerData } = props;

  const { visible = false, form, width, title } = DrawerData;

  return (
    <Drawer
      title={title}
      placement="right"
      closable={false}
      onClose={props.close}
      visible={visible}
      width={width}
    >
      {formMap(form)}
    </Drawer>
  );
};

const mapStateToProps = (state: any) => ({
  DrawerData: state.Drawer,
});

const mapDispatchToProps = (dispatch: any) => ({
  close: () => dispatch({ type: 'Drawer/close' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCustom);
