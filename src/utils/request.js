import axios from "axios";
import  {getContextPath} from './path.js'
const  service =axios.create({
    baseURL:getContextPath()+'/',
    timeout:10000,
    headers:{'X-Requested-With': 'XMLHttpRequest'},
})
//request 拦截器
axios.interceptors.request.use((config)=>{

})
export { service as axios };