// 获取年月日
const getYearMonthDay=(date)=> {
    let year=date.getFullYear()
    let month=date.getMonth()
    let day=date.getDate()
    return {year,month,day}
}
// 导出
export{
    getYearMonthDay
}