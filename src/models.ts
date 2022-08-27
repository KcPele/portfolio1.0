
interface imageI {
  asset: {
    _ref: string,
    _type: string
  }
  _type: string
}
interface SimilarI {
  name: string,
  imgUrl: imageI,
}

export interface HeadI extends SimilarI {
    _createdAt: string
}
export interface AboutInterface {
  title: string;
  description: string;
  imgUrl: string;
}

export interface TagI {
  _key: string;
  _type: string;
  tag: string;
}
export interface WorkI extends SimilarI{
  title: string;
  description: string;
  tags: TagI[];
  projectLink: string;
  codeLink: string;
}
export interface AnimateI {
  y: number;
  opacity: number;
}

export interface SkillI {
  bgColor: string;
  name: string;
  icon: string;
}

export interface ExWorkI {
  name: string;
  company: string;
  desc: string;
  _createdAt: string;
}
export interface ExperienceI {
  year: string;
  works: ExWorkI[];
  _createdAt: string;
}

export interface TestimonialI extends SimilarI {
  feedback: string,
  company: string,
}

export interface BrandI extends SimilarI {
    _id: string;
}

export interface FormI { 
  username: string, 
  email: string, 
  message: string
 }