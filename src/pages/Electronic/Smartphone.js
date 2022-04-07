import React, {useEffect} from 'react'
import {GetAllWorkPlace} from '../../store/actions/EstateAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Smartphone = () => {
    const count = useSelector((state) => state.EstateReducer.WorkPlaceCount)
    const Houses = useSelector((state) => state.EstateReducer.WorkPlace)
    const Loading = useSelector((state) => state.EstateReducer.WorkPlaceLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllWorkPlace())
    }, [])

    return (
        <div className='post_container'>
            <div className='dropdown_filters'>
                <div className='find'>По запросу Рабочее пространство найдено {count} обьявлений</div>
            </div>
            <div className='post_list'>
                <div className='card_container'>
                    {Loading ? <div animation="grow" size="lg" className='net' /> :
                        Houses && Houses.length > 0 ? Houses.map(home =>
                            <div className='card' key={home.id}>
                                <Link key={home.id} to={`/post/${home.id}`}>
                                    <div className='card_header'>
                                        <img src={home.image} className='card_img'/>
                                        <div className='sell_type'>{home.sell_type}</div>
                                    </div>
                                    <div className='card_body'>
                                        <h3 className='card_title'>{home.title}</h3>
                                        <h4 className='card_city'>{home.city}</h4>
                                        <h5 className='card_price'>{home.price} TMT</h5>
                                    </div>
                                </Link>
                            </div>
                        ):<div className='net'><h3>Нет Результатов</h3></div>}
                </div>
            </div>
        </div>

    )
}

export default Smartphone

