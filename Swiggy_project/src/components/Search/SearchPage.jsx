import React from 'react'
import { CiSearch } from "react-icons/ci";
import { PopularFood } from '../../Data/searchdata';
import "./SearchPage.css"

const SearchPage = () => {
    return (
        <div className='search_wrapper'>
            <div className='search_container'>

                <div>
                    <form className='input_search_container'>
                        <div className='input_search'>
                            <input type='text' placeholder='Search for restaurants and food' />
                        </div>

                        <div className='input_icon'>
                            <CiSearch />
                        </div>
                    </form>

                </div>

                <div>

                    <div className='recent_container'>
                        <p className='p'>Recent Searches</p>
                        <div className='recent_container_icon'>
                            <CiSearch />
                            <p>Kanha Ji Rasoi</p>
                        </div>
                    </div>

                    <div className='popular_image'>
                        {
                            PopularFood.map((url) => (
                                <div key={url.id}>
                                    <img src={url.imgUrl} />
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SearchPage