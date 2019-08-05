export default {
    formatDate:function (date) {
        if(!date)return ''
        return (date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+((date.getSeconds()>10)?date.getSeconds():('0'+date.getSeconds())));

    }
}