interface Technology {
  name: string;
  icon: string;
}

interface Project {
  imgPath: string;
  stack?: Technology[];
}

export interface Projects {
  [key: string]: Project;
}
