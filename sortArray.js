/**
 * Created by Administrator on 2017/12/10.
 */
define(['isArray'],function(isArray){

    function sortArray(arr){
        if(isArray(arr)){
            return arr.sort(function(a,b){
                return Math.random()-0.5; //�������
                //return a-b; //��С����
                //return b-a; //�Ӵ�С
            });
        }else return '����������';

    }
    return sortArray;
})