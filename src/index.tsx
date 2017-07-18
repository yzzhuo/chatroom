import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import App from './components/App';

const render = (Component:typeof App) => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider>
        <Component />
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    console.log('hot,');
    render(require('./components/App').default);
  });
}