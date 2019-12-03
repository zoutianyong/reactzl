import {createStore,combineReducers,applyMiddleware} from "redux";

//引入中间件
import reduxThunk from "redux-thunk";

// redux调试工具 要求是浏览器里面必须安装了redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension';

import type from  "./reducers/type"
import home from "./reducers/home"
import search from "./reducers/search"
import find from "./reducers/find"


const reducer = combineReducers({
    
    type,
    home,
    search,
    find
})

//3、通过createStore来创建仓库  ----->这个仓库必须要传递一个参数  reducers
const store = createStore(reducer,composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;
