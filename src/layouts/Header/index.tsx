import React from 'react';
import { Layout } from 'antd';
import styles from './index.module.scss';
import { HeaderProps } from './index.interface';
import {
  Menu as MenuIcon
} from '@material-ui/icons'
import logo from '../../logo.svg';

const { Header: AntHeader } = Layout;

export const Header = ({ collapsed, toggle, ...rest }: HeaderProps) => {
  return (
    <>
    <div className={styles.logo}>
    
  </div>
    <AntHeader className={styles.header}>
    <img src={logo} alt="" />
      <MenuIcon
        color="primary"
        className={styles.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
      />
    </AntHeader>
    </>
  );
};
