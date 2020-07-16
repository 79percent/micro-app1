import React, { useState, useEffect  } from 'react';
import styles from './index.less';

function Example(props) {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log('useEffect');
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    return () => {
      console.log('组件销毁');
      document.title = `组件销毁`;
    }
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

class Example2 extends React.Component {
  state = {
    is: true
  }

  handleClick = () => {
    const oldState = this.state
    this.setState({
      is: !this.state.is
    }, ()=>{
      console.log(this.state === oldState);
    })
  }

  render() {
    const { is } = this.state
    return (
      <>
        <h2>{is ? 1 : 0}</h2>
      <button onClick={this.handleClick}>check</button>
      </>
    )
  }
}

export default () => {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Example />
      {visible && <Example2/>}
      <p></p>
      <button onClick={() => setVisible(!visible)}>显示/隐藏</button>
    </div>
  );
}
