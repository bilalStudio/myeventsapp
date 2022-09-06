import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HooksChangeState from "./component/HooksChangeState";
import HooksChangeString from "./component/HooksChangeString";
import MultipleHooks from "./component/MultipleHooks";
import HooksMergeState from "./component/hooksMergeState";
import HooksArray from "./component/HooksArray";
import HookUseEffect from "./component/HookUseEffect";
import UseEffectTimer from "./component/UseEffectTimer";
import UseEffectWithDependency from "./component/UseEffectWithDependency";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
      <UseEffectWithDependency/>
      <UseEffectTimer/>
      <HookUseEffect/>
      <HooksArray/>
      <HooksMergeState/>
      <HooksChangeState/>
      <HooksChangeString/>
      <MultipleHooks/>
  </React.StrictMode>
);
reportWebVitals();
