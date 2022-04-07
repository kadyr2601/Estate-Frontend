import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetPostDetail } from '../store/actions/EstateAction';
import { useParams } from 'react-router-dom';
import EstateReducer from "../store/reducers/Estate";

const Detail = (props) => {

    const {id} = useParams()
    const Home = useSelector((state) => state.EstateReducer.PostDetail)
    const Loading = useSelector((state) => state.EstateReducer.PostDetailLoading)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(GetPostDetail(id))
    }, [])
    return (
             Loading ? <div animation="grow" size="sm" /> : Home && (<div className='home-detail'>
                     {Home.images.map((item) => { return <div className='slider' >
                             <div key={item.id}>
                                <div>
                                    <img key={Home} src={Home.image}/>
                                </div>
                                <div key={item.id}>
                                    <img key={item.id} src={item.image}/>
                                </div>
                             </div>
                         </div>
                        })}


                    <h3>{Home.title}</h3>
                    <h3>{Home.about}</h3>
                    <h3>{Home.city.display_name}</h3>
                    <h3>{Home.address}</h3>
                    <h3>{Home.type}</h3>
                    <h3>{Home.price}</h3>
                    <h3>{Home.meter}</h3>
                    <h3>{Home.room}</h3>
                    <h3>{Home.number}</h3>
                </div>
            )
    )
}

export default Detail
