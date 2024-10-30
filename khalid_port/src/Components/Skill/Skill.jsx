import React from 'react'
import Faded from '../faded';
import "./Skill.css"

const Skill = () => {

  let programLan = [
    { name: "Java" },
    { name: "Python" },
    { name: "C" },
    { name: "C++" },
    { name: "JavaScript" },
  ];

  let DevlopLan = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "TailWind CSS" },
    { name: "JavaScript" },
    { name: "React Js" },
    { name: "Express Js" },
    { name: "Node Js" },
    { name: "PostMan" },
  ];

  let DataBase = [
    { name: "MongoDB" },
    { name: "SQL" }
  ];

  let coreSubj = [
    { name: "DSA" },
    { name: "OOP" },
    { name: "OS" },
    { name: "DBMS" },
    { name: "NETWORKING" }
  ]

  return (
    <div className='skill_wrapper'>
      <div className='skill_container'>


        <div className='fadded_text_container'>
          <Faded title={"MY SKILLS"} />
          <Faded heading={"MY SKILLS"} />
        </div>


        <div className='lang_skills'>

          <div className='lang_container'>
            <h2>Programming Language</h2>

            <div className='language'>
              {
                programLan.map((lan) => (
                  <div className='programming'>{lan.name}</div>
                ))
              }
            </div>
          </div>

          <div className='lang_container'>
            <h2>Development Language</h2>

            <div className='language'>
              {
                DevlopLan.map ( (lan) => (
                  <div className='programming'>{lan.name}</div>
                ))
              }
            </div>
          </div>

          <div className='lang_container'>
            <h2>Data Base Language</h2>
            <div className='language'>
              {
                DataBase.map ( (data) => (
                  <div className='programming'>{data.name}</div>
                ))
              }
            </div>
          </div>

          <div className='lang_container'>
            <h2>Core Subject</h2>
            <div className='language' >
              {
                coreSubj.map( (subject) => (
                  <div className='programming'>{subject.name}</div>
                ))
              }
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skill
