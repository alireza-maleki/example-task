// === initial State ===
const initialState = {
    items: [],
    totalAmount: 0,
}


// === Get Navigate Category Items Reducers ===
export const getNavItemReducer = (state = { navItem: [], loading: false, error: '' }, action) => {

    switch (action.type) {
        case 'navItem':
            return { ...state, navItem: action.payload, loading: false, error: false }

        case 'loading':
            return { ...state, loading: true, error: false }

        case 'error':
            return { ...state, error: action.payload, loading: false }

        default:
            return state;
    }

}

export const getAllDataReducer = (state = { products: [], loading: false, error: '' }, action) => {

    switch (action.type) {
        case 'allData':
            return { ...state, products: action.payload, loading: false, error: false };

        case 'loading':
            return { ...state, loading: true, error: false };

        case "error":
            return { ...state, error: true, loading: false };

        default:
            return state;
    }

}