import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {

    let course = props.course;
    let isLikeCourse = props.isLikeCourse;
    let setisLikedCourse = props.setisLikedCourse;


    function clickHandler() {
        //logic
        if (isLikeCourse.includes(course.id)) {

            // pahle like huwa tha 
            setisLikedCourse((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");

        }
        else {

            // ye pahle se like nahi huwa tha 
            if (isLikeCourse.length === 0) {
                setisLikedCourse([course.id]);
            }
            else {
                //non-empty pehle se
                setisLikedCourse((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }


    const desc = `${course.description.substring(0, 200)}...`;


    return (
        <div>
            <div className='card_container'>
                <img className='image' src={course.image.url} />


                <button onClick={clickHandler} className='icon'>
                    {
                        isLikeCourse.includes(course.id) ? (<FcLike />) : (<FcLikePlaceholder />)
                    }
                </button>

                <div className='text_container'>
                    <h2>{course.title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card