// 获取年月日
const getYearMonthDay=(date)=> {
    let year=date.getYear()
    let month=date.getMonth()
    let day=date.getDay()
    return {year,month,day}
}
// 导出
export{
    getYearMonthDay
}