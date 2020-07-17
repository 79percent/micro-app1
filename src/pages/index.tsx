import React, { useState, useEffect } from 'react';
import styles from './index.less';
import moment from 'moment';

function Example(props: object) {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 声明多个 state 变量！
  const [time, setTime] = useState(moment().format('YYYY-MM-DD hh:mm:ss'));

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `${count}!`;
    return () => {
      document.title = `组件销毁`;
    };
  }, [count]);

  // 1. Use the name state variable
  const [name, setName] = useState('Mary');
  console.log(1);

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    console.log(2);
    localStorage.setItem('formData', name);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');
  console.log(3);

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    console.log(4);
    document.title = name + ' ' + surname;
  });
  console.log(5);

  return (
    <div>
      <h1>现在的时间：{time}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me count + 1</button>
    </div>
  );
}

class Example2 extends React.Component {
  state = {
    is: true,
  };

  handleClick = () => {
    const oldState = this.state;
    this.setState(
      {
        is: !this.state.is,
      },
      () => {
        console.log(this.state === oldState);
      },
    );
  };

  render() {
    const { is } = this.state;
    return (
      <>
        <h2>{is ? 1 : 0}</h2>
        <button onClick={this.handleClick}>check</button>
      </>
    );
  }
}

// 自定义Hook
function useFriendStatus(frinedId: number) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status: any) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    Promise.resolve({ isOnline: frinedId % 2 === 0 ? true : false }).then(
      res => {
        handleStatusChange(res);
      },
    );
  });

  return isOnline;
}

function FriendStatus(props: { friend: { id: number } }) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return <span>Loading...</span>;
  }
  return (
    <span style={{ color: isOnline ? 'green' : 'black' }}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  );
}

function FriendListItem(props: {
  friend: { id: number; name: React.ReactNode };
}) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span>{props.friend.name}</span>
      <FriendStatus {...props} />
    </li>
  );
}

function useCount(num) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(num);
  });

  return [count, setCount];
}

export default () => {
  // const arr = [
  //   {
  //     id: 0,
  //     name: 'a'
  //   },
  //   {
  //     id: 1,
  //     name: 'b'
  //   },
  //   {
  //     id: 2,
  //     name: 'c'
  //   },
  // ]
  // const [friendsList, setFriendsList] = useState(arr)
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useCount();
  const [count2, setCount2] = useCount(count);
  return (
    <div style={{ width: 1200, backgroundColor: '#ccc' }}>
      {/* {Array.isArray(friendsList) && friendsList.map(item => (
        <FriendListItem friend={item} key={item.id}/>
      ))} */}
      {/* <button onClick={() => setVisible(!visible)}>控制Example组件显示/隐藏</button> */}
      {/* {visible &&  */}
      {/* <Example /> */}
      {/* } */}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </div>
  );
};
