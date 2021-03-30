import axios from "axios";

export const initMenu = (router,store)=>{
    if(store.state.routes.length > 0){
        return;
    }
    //发起获取菜单请求
    axios.post()

}
