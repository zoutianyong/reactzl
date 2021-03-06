import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    Type,
    Detail,
    Search,
    List,
    Message
} from "pages"
// import Detail from "../pages/detail";


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue665",
        text:"首页"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        icon:"\ue70d",
        text:"品牌"
    },
    {
        path:"/type",
        component:Type,
        meta:{
            flag:true
        },
        icon:"\ue623",
        text:"分类"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        icon:"\ue6d7",
        text:"购物袋"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue699",
        text:"我的中免"
    }
];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/detail/:id/:newprice/:name/:pic",
        
        component:Detail,
        meta:{}
    },
    {
        path:"/search",
        component:Search,
        meta:{}
    },
    {
        path:"/list",
        component:List,
        meta:{}
    },
    {
        path:"/message",
        component:Message,
        meta:{}
    }
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)