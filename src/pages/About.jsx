import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import {Link} from "react-router-dom"
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences,socialLinks } from '../constants'
import CTA from "../components/CTA"; 
import { arrow } from "../assets_3d_portfolio/assets/icons";


const About = () => {
  return (
  <section className="max-container ">
    <h1 className="head-text">
      Hello, I'm <span className="green-gradient_text font font-semibold drop-shadow-sm">Ishan</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Web developer based in India, specilizing in technical education through hands on learning
          and building applications.
        </p>
      </div>

      <div className="py-7 flex flex-col">
        <h3 className="subhead-text text-black">My Skills</h3>
    
      <div className="mt-7 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-x1 flex justify-center items-center"> 
             <img 
             src={skill.imageUrl} 
             alt={skill.name} 
             className="w-1/2 h-1/2 object-contain"
             />
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-black">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>I've worked in free internships , leveling up my skills solo. here's the rundown</p>
        </div>
        <div className="mt-12 flex">

          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-50 h-50 object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
     
      <hr className="border-slate-400"/>

      <CTA />

      <div className="mt-6 flex flex-wrap gap-12">
        {socialLinks.map((links) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front  flex justify-center items-center"> 
             <img 
             src={links.iconUrl} 
             alt={links.name} 
             className="w-1/2 h-1/2 object-contain"
             />
             <div className="mt-3 flex items-center gap-2 font-poppins">
          <Link
            to={links.link}
            target="_blank"
            rel="noopener noreferrer"
            >
            <img src={arrow}
          alt="arrow"
          className="w-4 h-4 object-scale-down "
          />
          </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
      
  </section>
  );
};

export default About;