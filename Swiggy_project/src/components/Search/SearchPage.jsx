import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PopularFood } from "../../Data/searchdata";
import "./SearchPage.css";
import { SearchData } from "../../Data/searchdata";

const SearchPage = () => {
    const [searchKeyWords, SetSearchKeyWords] = useState("");
    const [filterData, setFilterData] = useState([]);

    const handleSearch = (word) => {
        SetSearchKeyWords(word);

        const filterData = SearchData.filter((tag) =>
            tag.title.toLowerCase().includes(word.toLowerCase())
        );
        setFilterData(filterData);
    };

    function handleImageClick(name) {
        handleSearch(name);
    }

    useEffect(() => {
        console.log(filterData);
    }, [filterData]);

    return (
        <div className="search_wrapper">
            <div className="search_container">
                <div>
                    <form
                        className="input_search_container"
                        onSubmit={(e) => e.preventDefault()}>
                        <div className="input_search">
                            <input
                                type="text"
                                placeholder="Search for restaurants and food"
                                name="searchKeyWords"
                                value={searchKeyWords}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>

                        <div className="input_icon">
                            <CiSearch />
                        </div>
                    </form>
                </div>

                {filterData.length === 0 && (
                    <div>
                        <div>
                            <div className="recent_container">
                                <p className="p">Recent Searches</p>
                                <div className="recent_container_icon">
                                    <CiSearch />
                                    <p>Kanha Ji Rasoi</p>
                                </div>
                            </div>

                            <div className="popular_image">
                                {PopularFood.map((url) => (
                                    <div key={url.id} onClick={() => handleImageClick(url.name)}>
                                        <img src={url.imgUrl} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className="fliter_data_warpper">
                    {filterData.length > 0 ? (
                        <div className="filter_data_container">
                            {filterData.map((data) => (
                                <div className="filter_data_content">
                                    <div className="img_content">
                                        <img src={data.imagaeUrl} alt={data.title} />
                                    </div>

                                    <div className="text-content">
                                        <h3>{data.title}</h3>
                                        <p>{data.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (

                        searchKeyWords &&
                        <div className="no_data">
                            <p>No Data related to this {searchKeyWords}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
