// Nacalo !!
const initialState = {
    Property : null,
    PropertyLoading : false,
    PropertyCount: 0,

    House : null,
    HouseLoading : false,
    HouseCount: 0,

    Area : null,
    AreaLoading : false,
    AreaCount: 0,

    WorkPlace : null,
    WorkPlaceLoading : false,
    WorkPlaceCount: 0,

    PostDetail : null,
    PostDetailLoading : false,

}

const EstateReducer = (state = initialState, action) => {
    switch (action.type) {
        ///////////////////////////////////////////////////////////// Home Case !!
        case 'GET_PROPERTY_START':
            return {
                ...state,
                PropertyLoading: true,
            }
        case 'GET_PROPERTY_SUCCESS':
            return {
                ...state,
                PropertyLoading: false,
                PropertyCount: action.payload.count,
                Property: action.payload.results,
            }
        case 'GET_PROPERTY_FAILURE':
            return {
                ...state,
                PropertyLoading: false,
            }

        ///////////////////////////////////////////////////////////// Cottage & House Case !!
        case 'GET_HOUSE_START':
            return {
                ...state,
                HouseLoading: true,
            }
        case 'GET_HOUSE_SUCCESS':
            return {
                ...state,
                HouseLoading: false,
                HouseCount: action.payload.count,
                House: action.payload.results,
            }
        case 'GET_HOUSE_FAILURE':
            return {
                ...state,
                HouseLoading: false,
            }

        ///////////////////////////////////////////////////////////// Area Case !!
        case 'GET_AREA_START':
            return {
                ...state,
                AreaLoading: true,
            }
        case 'GET_AREA_SUCCESS':
            return {
                ...state,
                AreaLoading: false,
                AreaCount: action.payload.count,
                Area: action.payload.results,
            }
        case 'GET_AREA_FAILURE':
            return {
                ...state,
                AreaLoading: false,
            }

        ///////////////////////////////////////////////////////////// Area Case !!
        case 'GET_WORKPLACE_START':
            return {
                ...state,
                WorkPlaceLoading: true,
            }
        case 'GET_WORKPLACE_SUCCESS':
            return {
                ...state,
                WorkPlaceLoading: false,
                WorkPlaceCount: action.payload.count,
                WorkPlace: action.payload.results,
            }
        case 'GET_WORKPLACE_FAILURE':
            return {
                ...state,
                WorkPlaceLoading: false,
            }

        ///////////////////////////////////////////////////////////// Post Detail Case !!
        case 'GET_POST_DETAIL_START':
            return {
                ...state,
                PostDetailLoading: true,
            }
        case 'GET_POST_DETAIL_SUCCESS':
            return {
                ...state,
                PostDetailLoading: false,
                PostDetail: action.payload,
            }
        case 'GET_POST_DETAIL_FAILURE':
            return {
                 ...state,
                 PostDetailLoading: false,
            }

        default:
            return state
    }
}

export default EstateReducer;
