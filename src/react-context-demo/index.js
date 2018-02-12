
import React from 'react';
import Header from './header';
import Main from './main';

import PropTypes from 'prop-types';

class Index extends React.Component {


    // 一个看起来很可怕的 childContextTypes，它的作用其实 propsType 验证组件 props 参数的作用类似。
    // 不过它是验证 getChildContext 返回的对象。
    // 为什么要验证 context，因为 context 是一个危险的特性，按照 React.js 团队的想法就是，把危险的事情搞复杂一些，提高使用门槛人们就不会去用了。
    // 如果你要给组件设置 context，那么 childContextTypes 是必写的。

    static childContextTypes = {
        themeColor: PropTypes.string,
    }

    constructor () {
        super();
        this.state = {
            themeColor: 'red',
        }
    }
    
    // 一个组件可以通过 getChildContext 方法返回一个对象，这个对象就是子树的 context，提供 context 的组件必须提供 childContextTypes 作为 context 的声明和验证。
    getChildContext () {
        return {
            themeColor: this.state.themeColor,
        }
    }


    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}


// childContextTypes 也可以定义在这里

// Index.childContextTypes = {
//     themeColor: PropTypes.string,
// }


export default Index;

