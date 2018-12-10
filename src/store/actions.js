export default {
    register({commit},payload){
        setTimeout(()=>{
            commit('register',payload);
        },1000)
       
    },
    unregister({commit},payload){
        commit('unregister',payload);
    }
}