import React from 'react';


const HeaderLinks = () => {
    return <div className='header_links_cont'>
                <div className='header_links'>
                    <div className="header_dropdown">
                        <button className="header_dropbtn">Сотрудничество</button>
                        <div className="header_dropdown-content">
                            <a href="/#">Стать продавцом</a>
                            <a href="/#">Партнёрская программа</a>
                        </div>
                    </div>
                    <div className="header_dropdown">
                        <button className="header_dropbtn">Поддержка</button>
                        <div className="header_dropdown-content">
                            <a href="/#">Служба поддержки</a>
                            <a href="/#">Сообщить о нарушении авторских прав</a>
                        </div>
                    </div>
                    <div className="header_dropdown">
                        <button className="header_dropbtn">Приложение</button>
                        <div className="header_dropdown-content">
                            <a href="/#">Android</a>
                            <a href="/#">IOS</a>
                        </div>
                    </div>
                    <div className="header_dropdown">
                        <button className="header_dropbtn">Язык</button>
                        <div className="header_dropdown-content">
                            <a href="/#">Русский</a>
                            <a href="/#">Türkçe</a>
                            <a href="/#">Türkmençe</a>
                        </div>
                    </div>
                </div>
           </div>
};

export default HeaderLinks;
