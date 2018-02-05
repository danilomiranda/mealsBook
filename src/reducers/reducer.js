const appReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_FLAVOR':
            return state.filter(obj => obj.flavor !== action.flavor)
            break;
    
        default:
            state;
    }
}

const result = appReducer (
    [
        {flavor: 'Chocolate', count: 4},
        {flavor: 'Vanilla', count: 334}
    ],
    { type: 'DELETE_FLAVOR', flavor: 'Vanilla'}
)

console.log(result)