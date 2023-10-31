export const saveToHistory = (requestObj, setState) => {
    const srt_object = JSON.stringify(requestObj),
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