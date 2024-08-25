interface Technology {
  name: string;
  icon: string;
}

interface Links {
  live: string;
  github: string;
}

interface Project {
  imgPath: string;
  mobileImg: string[];
  tabletImg: string[];
  stack?: Technology[];
  links: Links;
}

export interface Projects {
  [key: string]: Project;
}
