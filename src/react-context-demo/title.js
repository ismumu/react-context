
import React from 'react';

import PropTypes from 'prop-types';

class Title extends React.Component {
    
    // 子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，它也是必写的，如果你不写就无法获取 context 里面的状态。
    // 声明以后我们就可以通过 this.context.themeColor 获取到在 Index 放置的值为 red 的 themeColor，然后设置 h1 的样式，所以你会看到页面上的字体是红色的
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <h1 style={{ color: this.context.themeColor }}>react-context 的title</h1>
        )
    }
}

export default Title;