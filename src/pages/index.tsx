import React, { useState, useEffect, StrictMode } from 'react';
import './index.less';
import TestHook from './components/TestHook';
import TestContext from './components/TestContext';

const root = document.getElementById('root-slave');
root && (root.style.width = `${window.innerWidth}px`);
root && (root.style.height = `${window.innerHeight}px`);
root && (root.style.display = 'flex');

export default () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    window.onresize = function() {
      root && (root.style.width = `${window.innerWidth}px`);
      root && (root.style.height = `${window.innerHeight}px`);
    };
    return () => {
      window.onresize = () => {};
    };
  }, []);
  return (
    <StrictMode>
      {/* <TestHook num={num}>
        <p>shhasdha</p>
      </TestHook> */}
      <TestContext></TestContext>
    </StrictMode>
  );
};
