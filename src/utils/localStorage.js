export const saveToHistory = (requestObj, setState) => {
    const ogj_date = new Date();
    const [ day, month, year, hour, minute ] = [
        ogj_date.getDate(),
        ogj_date.getMonth(),
        ogj_date.getFullYear(),
        ogj_date.getHours(),
        ogj_date.getMinutes()
    ]
    const date = `${day}/${month}/${year} - ${hour}:${minute}`

    const srt_object = JSON.stringify({...requestObj, date}),
    localHistory = JSON.parse(localStorage.getItem('history') || "[]")

    const history = [...localHistory, srt_object];
    localStorage.setItem('history', JSON.stringify(history))
    setState([...history].map((req) => JSON.parse(req)))
}

export const getFromHistory = () => {
    const historyFromLocal = JSON.parse(localStorage.getItem('history') || "[]")
    const history = historyFromLocal.map((req) => JSON.parse(req))

    return history
}

export const deleteFromHistory = (requestObj, setState) => {
    const localHistory = JSON.parse(localStorage.getItem('history') || "[]")
    const history = localHistory.filter((req) => JSON.parse(req).id != requestObj.id)

    localStorage.setItem('history', JSON.stringify(history))
    setState([...history].map((req) => JSON.parse(req)))
}