import React from 'react'
import { CiSearch } from "react-icons/ci";
import { PopularFood } from '../../Data/searchdata';

const SearchPage = () => {
    return (
        <div>
            <div>

                <div>
                    <form>
                        <div>
                            <input type='text' placeholder='Search for restaurants and food' />
                        </div>

                        <div>
                            <CiSearch />
                        </div>
                    </form>
                </div>

                <div>
                    <div>
                        <p>Recent Searches</p>
                        <div>
                            <p><span><CiSearch /></span> Kanha Ji Rasoi</p>
                        </div>
                    </div>
                    <div>
                        {
                            PopularFood.map( (url) => (
                                <div>
                                    
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