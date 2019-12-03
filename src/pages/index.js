import Loadable from "react-loadable";
import Loading from "common/loading"


export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})


export const Find = Loadable({
    loader:_=>import("./find"),
    loading:Loading
})



export const Order = Loadable({
    loader:_=>import("./order"),
    loading:Loading
})



export const Mine = Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})



export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})


export const Type = Loadable({
    loader:_=>import("./type"),
    loading:Loading
})

export const Detail = Loadable({
    loader:_=>import("./detail"),
    loading:Loading
})

export const Search =Loadable({
    loader:_=>import("./search"),
    loading:Loading
})

export const List =Loadable({
    loader:_=>import("./list"),
    loading:Loading
})