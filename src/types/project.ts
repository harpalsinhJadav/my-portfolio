// src/types/project.ts
export interface Project {
  title: string;
  description: string;
  image_url: string;
  github_url: string | null;
  live_url: string | null;
  app_store_url: string | null;
  play_store_url: string | null;
  technologies: string[];
  category: string;
  is_featured: boolean;
  completion_date: string | null;
  id: string;
  created_date: string;
  updated_date: string;
  created_by_id: string;
  created_by: string;
  is_sample: boolean;
}
