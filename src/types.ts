export interface ApiRobot {
  _id: string;
  name: string;
  image: string;
  speed: number;
  endurance: number;
}

export interface ApiRobots {
  robots: ApiRobot[];
}
export interface Robot extends Omit<ApiRobot, "_id"> {
  id: string;
}
