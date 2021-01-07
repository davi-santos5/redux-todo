export function addToDo(text) {
    return {
        type: 'ADD_TO_DO',
        payload: {
            id: Math.floor(Math.random() * 1000),
            name: text
        }
    }
}