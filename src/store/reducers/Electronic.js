// Nacalo !!
const initialState = {
    SmartPhone : null,
    SmartPhoneLoading : false,
    SmartPhoneCount: 0,

    KeypadPhone : null,
    KeypadPhoneLoading : false,
    KeypadPhoneCount: 0,

    Tablet : null,
    TabletLoading : false,
    TabletCount: 0,
}

const ElectronicReducer = (state = initialState, action) => {
    switch (action.type) {
        ///////////////////////////////////////////////////////////// Smartphone Case !!
        case 'GET_SMARTPHONE_START':
            return {
                ...state,
                PropertyLoading: true,
            }
        case 'GET_SMARTPHONE_SUCCESS':
            return {
                ...state,
                PropertyLoading: false,
                PropertyCount: action.payload.count,
                Property: action.payload.results,
            }
        case 'GET_SMARTPHONE_FAILURE':
            return {
                ...state,
                PropertyLoading: false,
            }
        ///////////////////////////////////////////////////////////// KeypadPhone Case !!
        case 'GET_KEYPADPHONE_START':
            return {
                ...state,
                PropertyLoading: true,
            }
        case 'GET_KEYPADPHONE_SUCCESS':
            return {
                ...state,
                PropertyLoading: false,
                PropertyCount: action.payload.count,
                Property: action.payload.results,
            }
        case 'GET_KEYPADPHONE_FAILURE':
            return {
                ...state,
                PropertyLoading: false,
            }
        ///////////////////////////////////////////////////////////// Tablet Case !!
        case 'GET_TABLET_START':
            return {
                ...state,
                PropertyLoading: true,
            }
        case 'GET_TABLET_SUCCESS':
            return {
                ...state,
                PropertyLoading: false,
                PropertyCount: action.payload.count,
                Property: action.payload.results,
            }
        case 'GET_TABLET_FAILURE':
            return {
                ...state,
                PropertyLoading: false,
            }
        default:
            return state
    }
}

export default ElectronicReducer;
