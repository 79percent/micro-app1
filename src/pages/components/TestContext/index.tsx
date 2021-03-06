import React, { PureComponent } from 'react';
import { PageContext } from './utils';
import Childs from './Child';

const { Child, Child2 } = Childs;

const TestContext = () => {
  return (
    <PageContext.Provider value="world">
      <Child />
      <Child2 />
    </PageContext.Provider>
  );
};

export default TestContext;
