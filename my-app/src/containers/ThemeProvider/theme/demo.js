import React, { useState } from 'react';
import { Switch } from 'antd';
import './demo.scss';
import variables from '../style/_variables.scss';
let ThemeList = variables;
Object.keys(variables).forEach(i => {
  const arr = variables[i].split(' 0 ');
  ThemeList[i] = arr.map((j, index) => {
    if (j && index === arr.length - 1) {
      j = j.substring(0, j.length - 1);
    }
    return j.replace(/ 1 /, ': ');
  });
});
const ThemeDemo = () => {
  const [theme, setTheme] = useState('dark');
  const onChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div>
      <Switch defaultChecked onChange={onChange} /> {theme}
      <p>example:</p>
      <div className="react-ui-theme" data-theme={theme}>
        <div className="box-wrap">
          <div className="box-content"></div>
        </div>
        <div>
          {ThemeList[theme]?.map(i => (
            <p>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;
