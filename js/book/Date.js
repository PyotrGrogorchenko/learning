const d = new Date(2022, 1, 28, 15, 25)
console.log(d)

const getWeekDay = date => {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  return days[date.getDay()]
}
console.log(getWeekDay(d))

const getDateAgo = (date, days) => {
  const copy = new Date(date)
  copy.setDate(date.getDate() - days)
  return copy.getDate()
}
console.log(getDateAgo(d, 28))

const getLastDayOfMonth = (year, month) => {
  const date = new Date(year, month + 1, 0)
  return date.getDate()
}
console.log(getLastDayOfMonth(2022, 1))

const getSecondsToday = () => {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((now - today)/1000)
}
console.log(getSecondsToday())
