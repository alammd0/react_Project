import React from 'react'
import Faded from '../faded';
import "./Skill.css"

const Skill = () => {

  let programLan = [
    { name: "Java", level: 80 },
    { name: "Python", level: 50 },
    { name: "C", level: 75 },
    { name: "C++", level: 65 },
    { name: "JavaScript", level: 80 },
  ];

  let DevlopLan = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "TailWind CSS", level: 85 },
    { name: "JavaScript", level: 79 },
    { name: "React Js", level: 67 },
  ];

  let DataBase = [
    { name: "MongoDB", level: 40 },
    { name: "SQL", level: 30 }
  ];

  let coreSubj = [
    { name: "DSA", level: 50 },
    { name: "OOP", level: 70 },
    { name: "OS", level: 50 },
    { name: "DBMS", level: 20 },
    { name: "NETWORKING", level: 20 }
  ]

  return (
    <div className='skill_wrapper'>
      <div className='skill_container'>


        <div className='fadded_text_container'>
          <Faded title={"MY SKILLS"} />
          <Faded heading={"MY SKILLS"} />
        </div>


        <div className='lang_skills'>

          <div className="skill-container">
            <h2 className='skils_heading'>Programming Language</h2>

            <div>
              {programLan.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="skill-container">
            <h2 className='skils_heading' >Web Devlopment Language</h2>

            <div>
              {DevlopLan.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>


          <div className="skill-container">
            <h2 className='skils_heading' >Core Subject</h2>

            <div>
              {coreSubj.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="skill-container">
            <h2 className='skils_heading'>Data Base</h2>

            <div>
              {DataBase.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${skill.level}%` }}>
                    </div>
                    <div>{skill.level}%</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Skill
