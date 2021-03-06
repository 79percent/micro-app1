import React, { PureComponent } from 'react';
import { PageContext } from './utils';

/**
 * 使用Consumer获取数据
 * @param props
 */
const Child: React.FC = props => {
  const renderTitle = (value: string) => {
    return <h1>{value}</h1>;
  };
  return <PageContext.Consumer>{renderTitle}</PageContext.Consumer>;
};

/**
 * 使用contextType获取数据
 */
class Child2 extends React.Component {
  static contextType = PageContext;
  render() {
    const value = this.context;
    return <h1>{value}</h1>;
  }
}

export default {
  Child,
  Child2,
};
