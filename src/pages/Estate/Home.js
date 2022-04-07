import React, {useEffect} from 'react'
import {GetAllHomes, GetFilters, GetPagination} from '../../store/actions/EstateAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EstateReducer from "../../store/reducers/Estate";



const Home = () => {
        // Берем из Store
    const count = useSelector((state) => state.EstateReducer.PropertyCount)
    const Homes = useSelector((state) => state.EstateReducer.Property)
    const Loading = useSelector((state) => state.EstateReducer.PropertyLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllHomes())
    }, [])

    return (
        <div className='post_container'>
            <div className='dropdown_filters'>
                <div className='find'>По запросу Квартиры найдено {count} обьявлений</div>
            </div>
            <div className='post_list'>
                <div className='card_container'>
                    {Loading ? <div animation="grow" size="lg" className='net' /> :
                        Homes && Homes.length > 0 ? Homes.map(home =>
                            <div className='card' key={home.id}>
                                <Link key={home.id} to={`/post/${home.id}`}>
                                    <div className='card_header'>
                                        <img src={home.image} className='card_img'/>
                                         <div className='sell_type'>{home.sell_type}</div>
                                    </div>
                                    <div className='card_body'>
                                        <p className='card_title'>{home.title}</p>
                                        <h4 className='card_city'>{home.city}</h4>
                                        <hp className='card_price'>{home.price} TMT</hp>
                                    </div>
                                </Link>
                            </div>
                        ):<div className='net'><h3>Нет Результатов</h3></div>}
                </div>
            </div>
        </div>

    )
}

export default Home

//
// <div className='dropdown-item'>
//     <div variant="outline" title="Категории">
//     <div onClick={() => HandleFilterClick('home')}>Квартиры</div>
// <div onClick={() => HandleFilterClick('house')}>Дома, Дачи</div>
// <div onClick={() => HandleFilterClick('cottage')}>Коттеджы</div>
// <div onClick={() => HandleFilterClick('area')}>Земельные участки</div>
// <div onClick={() => HandleFilterClick('working_state')}>Коммерческая недвижимость</div>
// </div>
