import instance from './Instance'


function GetAllHomes() {
    return async (dispatch) => {
        dispatch({ type: "GET_PROPERTY_START" })

        try {
            const PropertyResponse = await instance.get(
                'estate/home/list/' );

            dispatch({ type: "GET_PROPERTY_SUCCESS", payload: PropertyResponse.data })
        } catch (err) {
            dispatch({ type: "GET_PROPERTY_FAILURE", payload: err})
        }
    }
}

function GetAllCottageHouse() {
    return async (dispatch) => {
        dispatch({ type: "GET_HOUSE_START" })

        try {
            const PropertyResponse = await instance.get(
                'estate/house-cottage/list/' );

            dispatch({ type: "GET_HOUSE_SUCCESS", payload: PropertyResponse.data })
        } catch (err) {
            dispatch({ type: "GET_HOUSE_FAILURE", payload: err})
        }
    }
}

function GetAllArea() {
    return async (dispatch) => {
        dispatch({ type: "GET_AREA_START" })

        try {
            const PropertyResponse = await instance.get(
                'estate/area/list/' );

            dispatch({ type: "GET_AREA_SUCCESS", payload: PropertyResponse.data })
        } catch (err) {
            dispatch({ type: "GET_AREA_FAILURE", payload: err})
        }
    }
}

function GetAllWorkPlace() {
    return async (dispatch) => {
        dispatch({ type: "GET_WORKPLACE_START" })

        try {
            const PropertyResponse = await instance.get(
                'estate/work-place/list/' );

            dispatch({ type: "GET_WORKPLACE_SUCCESS", payload: PropertyResponse.data })
        } catch (err) {
            dispatch({ type: "GET_WORKPLACE_FAILURE", payload: err})
        }
    }
}

function GetPostDetail(id) {
    return async (dispatch) => {
        dispatch({ type: "GET_POST_DETAIL_START" })

        try {
            const PostResponse = await instance.get(
                `post/detail/${id}/` );

            dispatch({ type: "GET_POST_DETAIL_SUCCESS", payload: PostResponse.data })
        } catch (err) {
            dispatch({ type: "GET_POST_DETAIL_FAILURE", payload: err})
        }
    }
}

export {
    GetAllHomes,
    GetAllCottageHouse,
    GetAllArea,
    GetAllWorkPlace,
    GetPostDetail,
}
