import React, { useState, useEffect } from 'react';
import './index.less';
import TestHook from './components/TestHook';

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
    <>
      <TestHook num={num}>
        <p>shhasdha</p>
      </TestHook>
    </>
  );
};
