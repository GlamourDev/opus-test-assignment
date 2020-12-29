import React, { PureComponent } from "react";

import { Layout } from "antd";
import { Header } from "../Header";
import { BaseMenu } from "../Menu";
import { Menus } from "../../router/config";
import styles from "./index.module.scss";
import TimeMeasure from "../../components/TimeMeasure";
import { BaseLayoutState } from "./index.interface";
import FooterPage from "../../layouts/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderTitle from "../../components/Header.js";

const { Sider, Content } = Layout;

class PageLayout extends PureComponent<BaseLayoutState> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <>
        <Header collapsed={this.state.collapsed} toggle={this.toggle} />
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              overflow: "auto",
              height: "100vh",
            }}
          >
            <BaseMenu menu={Menus} theme="dark" mode="vertical" />
          </Sider>
          <Layout>
            <Content className={styles.content}>
              <HeaderTitle />

              <TimeMeasure />
            </Content>
          </Layout>
        </Layout>
        <FooterPage />
      </>
    );
  }
}

export default PageLayout;
