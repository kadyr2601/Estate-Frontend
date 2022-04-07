import React from 'react'


const Navigation = () => {

    return (
            <div className="navigation_container">
                <div className="navbar">
                    <div className="subnav">
                        <button className="subnavbtn">Недвижимость</button>
                        <div className="subnav-content">
                            <div className='content'>
                                <a href="homes">Квартиры</a>
                                <a href="houses">Коттеджы, Дома, Земельные участки</a>
                                <a href="areas">Земли</a>
                                <a href="work-place">Рабочее пространство</a>
                            </div>
                        </div>
                    </div>
                    <div className="subnav">
                        <button className="subnavbtn">Транспорт</button>
                        <div className="subnav-content">
                            <div className='content'>
                                <a href="/#">Все</a>
                                <a href="/#">Team</a>
                                <a href="/#">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className="subnav">
                        <button className="subnavbtn">Электроника</button>
                        <div className="subnav-content">
                            <div className='content'>
                                <a href="/#">Смартфоны</a>
                                <a href="/#">Кнопочные телефоны</a>
                                <a href="/#">Планшеты</a>
                                <a href="/#">Настольные компьютеры</a>
                                <a href="/#">Ноутбуки</a>
                                <a href="/#">Телевизоры</a>
                                <a href="/#">Мониторы</a>
                                <a href="/#">Камеры</a>
                                <a href="/#">Колонки & Стерео системы</a>
                                <a href="/#">Playstation & Xbox</a>
                            </div>
                        </div>
                    </div>
                    <div className="subnav">
                        <button className="subnavbtn">Бытовая техника</button>
                        <div className="subnav-content">
                            <div className='content'>
                                <a href="/#">Company</a>
                                <a href="/#">Team</a>
                                <a href="/#">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className="subnav">
                        <button className="subnavbtn">Для женщин</button>
                        <div className="subnav-content">
                            <div className='content'>
                                <a href="/#">Company</a>
                                <a href="/#">Team</a>
                                <a href="/#">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className="subnav">
                        <button className="subnavbtn">Для мужчин</button>
                        <div className="subnav-content">
                            <div className='content'>
                                <a href="/#">Company</a>
                                <a href="/#">Team</a>
                                <a href="/#">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div className="subnav">
                        <button className="subnavbtn">Для детей</button>
                        <div className="subnav-content">
                            <div className='content'>
                                <a href="/#">Company</a>
                                <a href="/#">Team</a>
                                <a href="/#">Careers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Navigation
