import React from 'react'
import estate from '../img/home.jpg'
import Banner from "../components/Banner";


const Home = () => {
    return (
       <div className='home-content'>
           <div className='home-banner'>
               <Banner/>
           </div>
           <div className='vip-posts-cont'>
                <h5 className='vip-posts-text'>Популярные</h5>
               <div className='vip-posts'>

                   <div className='card'>
                       <div className='card_header'>
                           <img src={estate} className='card_img'/>
                       </div>
                       <div className='card_body'>
                           <h3 className='card_title'> Text Title</h3>
                           <h4 className='card_city'>Turkmenabat</h4>
                           <h5 className='card_price'>2222222 TMT</h5>
                       </div>
                   </div>

                   <div className='card'>
                       <div className='card_header'>
                           <img src={estate} className='card_img'/>
                       </div>
                       <div className='card_body'>
                           <h3 className='card_title'> Text Title</h3>
                           <h4 className='card_city'>Turkmenabat</h4>
                           <h5 className='card_price'>2222222 TMT</h5>
                       </div>
                   </div>

                   <div className='card'>
                       <div className='card_header'>
                           <img src={estate} className='card_img'/>
                       </div>
                       <div className='card_body'>
                           <h3 className='card_title'> Text Title</h3>
                           <h4 className='card_city'>Turkmenabat</h4>
                           <h5 className='card_price'>2222222 TMT</h5>
                       </div>
                   </div>

                   <div className='card'>
                       <div className='card_header'>
                           <img src={estate} className='card_img'/>
                       </div>
                       <div className='card_body'>
                           <h3 className='card_title'> Text Title</h3>
                           <h4 className='card_city'>Turkmenabat</h4>
                           <h5 className='card_price'>2222222 TMT</h5>
                       </div>
                   </div>
                   <div className='card'>
                       <div className='card_header'>
                           <img src={estate} className='card_img'/>
                       </div>
                       <div className='card_body'>
                           <h3 className='card_title'> Text Title</h3>
                           <h4 className='card_city'>Turkmenabat</h4>
                           <h5 className='card_price'>2222222 TMT</h5>
                       </div>
                   </div>

                   <div className='card'>
                       <div className='card_header'>
                           <img src={estate} className='card_img'/>
                       </div>
                       <div className='card_body'>
                           <h3 className='card_title'> Text Title</h3>
                           <h4 className='card_city'>Turkmenabat</h4>
                           <h5 className='card_price'>2222222 TMT</h5>
                       </div>
                   </div>

                   <div className='card'>
                       <div className='card_header'>
                           <img src={estate} className='card_img'/>
                       </div>
                       <div className='card_body'>
                           <h3 className='card_title'> Text Title</h3>
                           <h4 className='card_city'>Turkmenabat</h4>
                           <h5 className='card_price'>2222222 TMT</h5>
                       </div>
                   </div>
               </div>
           </div>

           <div className='category'><a href='/#'>
                <img src={estate} className='category-img' alt='category-img' />
                <div className='category_text_cont'>
                    <p className='category_text'>Квартиры</p>
                </div></a>
            </div>

           <div className='category'><a href='/#'>
               <img src={estate} className='category-img' alt='category-img' />
               <div className='category_text_cont'>
                   <p className='category_text'>Квартиры</p>
               </div></a>
           </div>

           <div className='category'><a href='/#'>
               <img src={estate} className='category-img' alt='category-img' />
               <div className='category_text_cont'>
                   <p className='category_text'>Квартиры</p>
               </div></a>
           </div>

           <div className='category'><a href='/#'>
               <img src={estate} className='category-img' alt='category-img' />
               <div className='category_text_cont'>
                   <p className='category_text'>Квартиры</p>
               </div></a>
           </div>

           <div className='category'><a href='/#'>
               <img src={estate} className='category-img' alt='category-img' />
               <div className='category_text_cont'>
                   <p className='category_text'>Квартиры</p>
               </div></a>
           </div>

           <div className='category'><a href='/#'>
               <img src={estate} className='category-img' alt='category-img' />
               <div className='category_text_cont'>
                   <p className='category_text'>Квартиры</p>
               </div></a>
           </div>

      </div>
    )
}

export default Home
