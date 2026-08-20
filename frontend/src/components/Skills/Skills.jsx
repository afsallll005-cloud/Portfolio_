import './Skills.css';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/HTML', level: 95 },
    { name: 'MongoDB', level: 75 }
  ];

  return (
    <div
      className="skills-section"
      id="skills"
    >

      <div className="section-label">
        SKILLS
      </div>


      <div className="skills-list">

        {skills.map((skill) => (

          <div
            className="skill-item"
            key={skill.name}
          >

            <div className="skill-name">
              {skill.name}
            </div>


            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{
                  width: `${skill.level}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}