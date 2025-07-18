const initialState = {
    data: [],
    postResponse: null,
    loading: false,
    error: null,
  };
const apiReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'API_GET_REQUEST':
        case 'API_POST_REQUEST':
            return {...state, loading:true,error:null};
        
        case 'API_GET_SUCCESS':
            return { ...state, data: action.payload, loading: false };

        case 'API_POST_SUCCESS':
            return { ...state, postResponse: action.payload, loading: false };
        
        case 'API_FAILURE':
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
          
    }
};
export default apiReducer;
