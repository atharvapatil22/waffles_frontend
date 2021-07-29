export const initialState = {
    user:null,
};
//initial state: how the data layer looks initially

export const actionTypes = {
    SET_USER : "SET_USER",
};
//pushing user into datalayer

const reducer = (state, action) => {
  console.log(action)
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }; //changes

        default:
            return state;
    }
};

export default reducer;