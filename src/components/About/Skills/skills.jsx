import skillsData from "./skillsData"
import SkillsChart from "./skillsChart"

const SkillsData = Object.values(skillsData);

export default function SkillsGraph(props) {
  return (
    <div className="skill-charts">
      { SkillsData.map((skillsData,i) => ( <SkillsChart key={i} skillsData={skillsData}/> )) }
    </div>
  )
}