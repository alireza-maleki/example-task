import axios from "axios";


// === Get Navigate Category Items ===
export const getNavItem = () => async (dispatch, getState) => {

    dispatch({ type: "loading" });

    try {

        const { data } = await axios.get('https://fakestoreapi.com/products/categories');
        dispatch({ type: 'navItem', payload: [...data] });
        // console.log(data);

    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }

}

export const getAllData = () => async (dispatch, getState) => {

    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: 'allData', payload: [...data] })
    } catch (error) {
        dispatch({ type: 'error', payload: error.message })
    }

}
