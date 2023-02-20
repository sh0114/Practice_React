import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/commentList'
import NotificationList from './chapter_06/NotificationList';
import Accomodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButtonCFS from './chapter_08/ConfirmButtonCFS';
import ConfirmButtonFC from './chapter_08/ConfirmButtonFC';
import LandingPage from './chapter_09/LandingPage';
import AttedanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <SignUp />
  </React.StrictMode>,
  // document.getElementById('root')
);

/*
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode> ,
    document.getElementById('root')
  ); 
}, 1000 );
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
