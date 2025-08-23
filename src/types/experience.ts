// src/types/experience.ts
export interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date: string | null;
  location: string;
  description: string;
  technologies: string[];
  is_current: boolean;
  id?: string;
  created_date?: string;
  updated_date?: string;
  created_by_id?: string;
  created_by?: string;
  is_sample?: boolean;
}
