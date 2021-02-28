import React, { useState, useEffect } from 'react';
import './index.less';

export default props => {
  console.log(props);
  const [count, setCount] = useState(0);
  return (
    <div className="test-hook">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <div className="text-box single-line">
        A公司是B公司的重要战略伙伴，致力于为C行业提供一站式
        解决方案，目前处于高速发展期。公司旗下有四个事业部，业务主要涵盖以下三个方面，2016年公司
        年营业额达到100万元。
      </div>
      <div className="text-box multi-line">
        A公司是B公司的重要战略伙伴，致力于为C行业提供一站式解决方案，目前处于高速发展期。公司旗下有四个事业部，业务主要涵盖以下三个方面，2016年公司年营业额达到100万元。
      </div>
      <textarea>你好， 这是在 text area 里的文本</textarea>
      {props.children}
    </div>
  );
};
