import React from 'react'
import {data} from "../Data"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Search = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const [users,setUser] = React.useState(data);
    const [search,setSearch] = React.useState("");

    const filteruser = users.filter((user)=>{
        return user.name.toLowerCase().includes(search.toLowerCase());
    });



    return (
        <div className="container">
            <form>
                <input type="text" placeholder="Search poeple" onChange={e => setSearch(e.target.value)}/>
            </form>

            {/*<div className="cardContainer">*/}
            <Slider {...settings}>
                {filteruser.map((user)=>{
                return(
                    <div className="card" key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.age}</p>
                    </div>
                    )
                })}

            </Slider>
            {/*</div>*/}


            
            
        </div>
    )
}

export default Search
