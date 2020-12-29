import { Route, Switch, Redirect } from 'react-router-dom';
import { Menus } from './config';

export const BaseRouters = () => (
    <Switch>
      <Redirect from="/" to={Menus[0].path} exact />

      {Menus.map(menu => {
        const route = ({ path, title }: typeof menu) => (
          <Route key={title} path={path} />
        );
        return menu
          ? route(menu)
          : 
            // @ts-ignore
            menu.subMenu.map(item => route(item));
      })}
    </Switch>
);
