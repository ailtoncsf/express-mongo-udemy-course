export const changeDescription = (event)=> ({
    type: 'DESCRPTION_CHANGED',
    payload: event.target.value
})