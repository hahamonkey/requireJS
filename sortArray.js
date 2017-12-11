/**
 * Created by Administrator on 2017/12/10.
 */
define(['isArray'],function(isArray){

    function sortArray(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return Math.random()-0.5; //随机排序
                //return a-b; //从小到大
                //return b-a; //从大到小
            });
        }else return '请输入数组';

    }
    return sortArray;
})