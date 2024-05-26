import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import PeartsHeader from './pearts/PeartsHeader';
import PeartsTitle from './pearts/PeartsTitle';
import PeartsWeight from './pearts/PeartsWeight';
import PeartsTrainMenu from './pearts/PeartsTrainMenu';

let root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
  <React.StrictMode>
    <PeartsHeader />
  </React.StrictMode>
);

let root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <PeartsTitle />
  </React.StrictMode>
);

let root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
    <PeartsWeight />
  </React.StrictMode>
);

let root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(
  <React.StrictMode>
    <PeartsTrainMenu />
  </React.StrictMode>
);
