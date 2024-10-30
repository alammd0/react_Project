import React, { useState } from 'react'
import Card from './Card';


const Cards = (props) => {
    let courses = props.fetchData;
    const [isLikeCourse, setisLikedCourse] = useState([]);

    let categary = props.categary;


    function getAllcourse() {

        if (categary === "All") {
            let allCourseData = [];
            Object.values(courses).forEach(array => {
                array.forEach(course => {
                    allCourseData.push(course);
                })
            })
            return allCourseData;
        }
        else {
            return courses[categary]
        }

    }


    return (
        <div className='cards_container'>
            {
                getAllcourse().map((course) => (
                    <Card
                        course={course}
                        isLikeCourse={isLikeCourse}
                        setisLikedCourse={setisLikedCourse}
                    />
                ))
            }
        </div>
    )
}

export default Cards