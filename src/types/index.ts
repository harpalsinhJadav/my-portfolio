// src/types/index.ts
import {Developer} from "./developer";
import {Education} from "./education";
import {Experience } from "./experience";
import {Project} from "./project";
import {Skill} from "./skill";


export * from "./developer";
export * from "./education";
export * from "./experience";
export * from "./project";
export * from "./skill";

export interface APIDataType {
  Developer: Developer[];
  Education: Education[];
  Experience: Experience[];
  Projects: Project[];
  Skills: Skill[];
}
