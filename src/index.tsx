import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.less';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Uml=()=>(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Uml />,
  document.getElementById('root') as HTMLElement
);
