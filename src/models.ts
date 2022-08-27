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
export interface WorkI {
  title: string;
  name: string;
  imgUrl: string;
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
}
export interface ExperienceI {
  year: string;
  works: ExWorkI[];
}
