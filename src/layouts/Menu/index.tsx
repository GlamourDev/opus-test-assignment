import React from 'react';
import 'antd/dist/antd.css';
import { Menu as AntMenu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuProps as AntMenuProps } from 'antd/lib/menu';
import LanguageSelector from "./LanguageSelector"

interface MenuItem {
  path: string;
  title: string;
  redirect?: string;
  subMenu?: MenuItem[];
}

type MenuProps = {
  menu: MenuItem[];
} & AntMenuProps;

const renderMenuItem = (item: MenuItem) => (
  <AntMenu.Item key={item.path}>
    <Link to={item.redirect || item.path}>
      <span className="nav-text">{item.title}</span>
    </Link>
  </AntMenu.Item>
);

const renderSubMenu = (item: MenuItem) => (
  <AntMenu.SubMenu
    key={item.path}
    title={
      <span>
        <span className="nav-text">{item.title}</span>
      </span>
    }
  >
    {item.subMenu!.map(item => renderMenuItem(item))}
  </AntMenu.SubMenu>
);

export const BaseMenu = ({ menu, ...props }: MenuProps) => (
  <>
  <AntMenu {...props}>
    {menu.map(item =>
      item.subMenu ? renderSubMenu(item) : renderMenuItem(item)
    )}

  </AntMenu>
      <LanguageSelector/>
      </>
);
