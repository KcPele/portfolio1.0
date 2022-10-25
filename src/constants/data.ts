import { AboutInterface, ExperienceI, SkillI, WorkI } from "../models";
import images from "./images";


export const abouts = [
  {id: 1,title: "web Developemnt", description: "I love building highly functional web apps that solves the present needs of individuals at large", imgUrl: images.about01},
  {id: 2, title: "Frontend Development", description: "I am a frontend developer with a passion for building beautiful and functional web site ", imgUrl: images.about02},
  {id: 3, title: "Backend Development", description: "A good understanding of what you need comes from the root(backend). I assist in writing backend codes and logic", imgUrl: images.about03},
  {id: 4, title: "Web3 Development", description: "The current shift in tech has made me master blockchain and also write and audit codes in the space", imgUrl: images.about04},
  {id: 5, title: "Api Dev", description: "I create wonderful api with django, fastApi, graphql and nodejs", imgUrl: images.graphql}
] as AboutInterface[]


export const skills = [
  {name: 'Css', bgColor: "", icon: images.css},
  {name: 'FastApi', bgColor: "", icon: images.fastapi},
  {name: 'Django', bgColor: "", icon: images.django},
  {name: 'Solidity', bgColor: "", icon: images.solidity},
  {name: 'Api', bgColor: "", icon: images.api},
  {name: 'Redux Toolkit', bgColor: "", icon: images.redux},
  {name: 'HTML', bgColor: "", icon: images.html},
  {name: 'Graphql', bgColor: "", icon: images.graphql},
  {name: 'Sass', bgColor: "", icon: images.sass},
  {name: 'Git', bgColor: "", icon: images.git},
  {name: 'Typescript', bgColor: "", icon: images.typescript},
  {name: 'Nodejs', bgColor: "", icon: images.node},
  {name: 'Javascript', bgColor: "", icon: images.javascript},
  {name: 'Python', bgColor: "", icon: images.python},
  {name: 'React', bgColor: "", icon: images.react},
  
] as SkillI[]
export const experiences = [
    {year: "2018", works: [{name: "Personal Project", company: "Kc Pele", desc: "I have been building personal project to help grow my skills", _createdAt: "1"}]},
    {year: "2020", works: [{name: "Data Analysis", company: "code2gether", desc: "i teach young students on the steps to follow to become young programmers(data analysis)", _createdAt: "2"}]},
    {year: "2022", works: [{name: "Blockchain Mentor", company: "Growic Foundation", desc: "I am currently a mentor at growic foundation where i mentor and assist upcoming solidity developers in learning web3", _createdAt: "3"}]},
    {year: "2022", works: [{name: "FullStack Development", company: "Metlab", desc: "I worked as a full stack developer at metlab duing the zuri program", _createdAt: "4"}]}
] as ExperienceI[]

export const testimonials = [
  {name: "Mr Tony", company: 'Metlab', imgUrl: images.css, feedback: "He did a great job while he was still with us at Metlab"},
  {name: "Mr David", company: 'Nibbl.', imgUrl: images.figma, feedback: "He understands fast and writes clean codes"},
  {name: "Miss Peaches", company: 'Metlab', imgUrl: images.html, feedback: "He is a wondeful developer with great understanding of what he is doing"}
]

export const brands = [
  {imgUrl: images.nibble, name: "Nibble.", _id: 1},
  {imgUrl: images.metlab, name: 'Metlab', _id: 2}
] 

export const works = [
  {name: "", title:'FastApi Dashboard', imgUrl: images.about02, description: "Build with react and will fetch the data from a fastapi server", codeLink: 'https://github.com/KcPele/dashboard-react', projectLink: "https://fastapidashboard.vercel.app/", tags: [{tag: "React JS"}, {tag: 'FastApi'}, {tag: "All"}]},
  {name: "", title:'Test Dashboard', imgUrl: images.about02, description: "The dashboard was just for an interview test", codeLink: 'https://github.com/KcPele/interview-test', projectLink: "http://maindashboard.vercel.app/", tags: [{tag: "React JS"}, {tag: "Typescript"}, {tag: "All"}]},
  {name: "", title:'Mini jumia Shopping App', imgUrl: images.about02, description: "A mini jumia shopping app clone", codeLink: 'https://github.com/KcPele/ecommace-with-stripe', projectLink: "https://minijumia.vercel.app/", tags: [{tag: "Next Js"}, {tag: 'Web App'}, {tag: "All"}]},
  {name: "", title:'Metlab', imgUrl: images.about02, description: "Online metadata viewer", codeLink: "https://github.com/KcPele/fetch-metadata-team-90", projectLink: "https://metlab.herokuapp.com", tags: [{tag: "Django"}, {tag: "Web App"}, {tag: "All"}]},
  {name: "", title:'Material/Tutorial WebApp', imgUrl: images.about02, description: "A mini E-test and library web app for Nigerian students", codeLink: 'https://github.com/KcPele/freeshers_django_app', projectLink: "https://materialcenter.herokuapp.com", tags: [{tag: "Django"}, {tag: "Web App"}, {tag: "All"}]},
  {name: "", title:'404 NOT FOUND', imgUrl: images.about02, description: "Dev.io challange", codeLink: 'https://github.com/KcPele/404_not_found', projectLink: "https://wizardly-khorana-19e375.netlify.app/", tags: [{tag: "HTML/CSS"}, {tag: "Web Dev"}, {tag: "All"}]},
  {name: "", title:'Classic Cheesecake Recipe', imgUrl: images.about02, description: "Dev.io challange", codeLink: 'https://github.com/KcPele/recipe-page-master', projectLink: "https://nostalgic-lewin-af8c77.netlify.app/", tags: [{tag: "HTML/CSS"}, {tag: "All"}]},
  {name: "", title:'The creative crew', imgUrl: images.about02, description: "Dev.io challange", codeLink: 'https://github.com/KcPele/team_page_challenge', projectLink: "https://zen-swartz-d89524.netlify.app/", tags: [{tag: "HTML/CSS"}, {tag: "All"}]},
  {name: "", title:'Modern interior', imgUrl: images.about02, description: "Dev.io challange", codeLink: 'https://github.com/KcPele/interior_consultant_challenge', projectLink: "https://epic-babbage-54ccc1.netlify.app/", tags: [{tag: "HTML/CSS"}, {tag: "All"}]},
  {name: "", title:'Simple Gallary', imgUrl: images.about02, description: "Dev.io challange", codeLink: 'https://github.com/KcPele/gallery-challenge', projectLink: "https://infallible-bose-b3188d.netlify.app/", tags: [{tag: "HTML/CSS"}, {tag: "All"}]},
  {name: "", title:'Checkout Challange', imgUrl: images.about02, description: "Dev.io Challange", codeLink: 'https://github.com/KcPele/checkout-challange', projectLink: "https://stoic-brattain-b1f1a7.netlify.app/", tags: [{tag: "HTML/CSS"}, {tag: "All"}]},
  {name: "", title:'GPT3 Open Ai', imgUrl: images.about02, description: "Let’s Build Something amazing with GPT-3 Open Ai", codeLink: 'https://github.com/KcPele/gpt3-design', projectLink: "https://gpt3-ai123.netlify.app/", tags: [{tag: "Next Js"}, {tag: "Web Dev"}, {tag: "All"}]},
  {name: "", title:'Portfolio', imgUrl: images.about02, description: "My old portfolio", codeLink: 'https://github.com/KcPele/django_internship_resume', projectLink: "https://kcpele.herokuapp.com/", tags: [{tag: "Django"}, {tag: "Web Dev"}, {tag: "All"}]},
  {name: "", title:'Taskcy Api', imgUrl: images.about02, description: "Taskcy todo api", codeLink: 'https://github.com/KcPele/taskcyapi', projectLink: "https://taskcyapi.herokuapp.com/docs", tags: [{tag: "FastApi"}, {tag: "Web App"}, {tag: "All"}]},
  {name: "", title:'Taskcy', imgUrl: images.about02, description: "Taskcy Todo app", codeLink: 'https://github.com/KcPele/taskcyTodo', projectLink: "https://taskcy.vercel.app/", tags: [{tag: "React JS"}, {tag: "Typescript"}, {tag: "Web App"}, {tag: "All"}]},
  {name: "", title:'Nibbl.', imgUrl: images.about02, description: "Manage your space easily with Nibbl.", codeLink: 'https://github.com/KcPele/nibbl', projectLink: "https://nibbl-eight.vercel.app/", tags: [{tag: "Next Js"}, {tag: "Typescript"}, {tag: "All"}]},
  {name: "", title:'Restuarant Landing Page', imgUrl: images.about02, description: "The key to fine dining", codeLink: 'https://github.com/KcPele/restuarant-landing-page', projectLink: "https://restuarant-landing-page.vercel.app/", tags: [{tag: "React JS"}, {tag: "All"}, {tag: "All"}]},
  // {name: "", title:'', imgUrl: images.about02, description: "", codeLink: '', projectLink: "", tags: [{tag: ""}, {tag: ""}, {tag: "All"}]},
  // {name: "", title:'', imgUrl: images.about02, description: "", codeLink: '', projectLink: "", tags: [{tag: ""}, {tag: ""}, {tag: "All"}]},
  // {name: "", title:'', imgUrl: images.about02, description: "", codeLink: '', projectLink: "", tags: [{tag: ""}, {tag: ""}, {tag: "All"}]},
  // {name: "", title:'', imgUrl: images.about02, description: "", codeLink: '', projectLink: "", tags: [{tag: ""}, {tag: ""}, {tag: "All"}]},
  // {name: "", title:'', imgUrl: images.about02, description: "", codeLink: '', projectLink: "", tags: [{tag: ""}, {tag: ""}, {tag: "All"}]},
  // {name: "", title:'', imgUrl: images.about02, description: "", codeLink: '', projectLink: "", tags: [{tag: ""}, {tag: ""}, {tag: "All"}]},

] as WorkI[]