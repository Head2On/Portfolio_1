import { Link } from 'react-router-dom';
import { projects } from '../constants'
import { arrow } from '../assets_3d_portfolio/assets/icons';
import CTA from '../components/CTA';

const Projects = () =>{
  return (
<section className="max-container">
    <h1 className="head-text">
      My <span className="green-gradient_text font font-semibold drop-shadow-sm">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>I've embarked on numerous projects throughout the years,
           but these are the ones I hold closest to my heart. Many of them are open-source,
            so if you come across something that piques your interest, 
            feel free to explore the codebase and contribute your ideas for further 
            improvements. Your contribution is highly appreciated!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) =>(
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center"> 
                  <img 
                  src={project.iconUrl} 
                  alt="Project Icon" 
                  className="w-1/2 h-1/2 object-contain"
                  />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-semibold font-poppins">
               {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
          <div className="mt-5 flex items-center gap-2 font-poppins">
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
            >

              Go & check
          </Link>
          <img src={arrow}
          alt="arrow"
          className="w-4 h-4 object-contain"
          />
          </div>
          </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-400" />

      <CTA />
    </section>
  )
}

export default Projects;