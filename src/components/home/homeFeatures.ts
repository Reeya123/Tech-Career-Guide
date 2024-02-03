import roadmaps from '../../content/features.json';

export type HomeFeaturesType = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  title: string;
  description: string;
  featuredTitle: string;
  featuredDescription: string;
  author: {
    name: string;
    url: string;
  };
  type: 'role' | 'tool';
  featured: boolean;
  imageUrl?: string;
  jsonUrl?: string;
  isNew?: boolean;
  landingPath?: string;
  resourcesPath: string;
  contentPathsFilePath?: string;
  metaPath: string;
  isCommunity: boolean;
  isUpcoming: boolean;
  id: string;
  pdfUrl?: string;
  relatedRoadmaps?: string[];
};

export function getRoadmapById(id: string): HomeFeaturesType | undefined {
  return (roadmaps as HomeFeaturesType[]).find((roadmap) => roadmap.id === id);
}

export function getAllRoadmaps(): HomeFeaturesType[] {
  return roadmaps as HomeFeaturesType[];
}

export function filterRoadmapsByIds(ids: string[]): HomeFeaturesType[] {
  return (roadmaps as HomeFeaturesType[]).filter(roadmap => ids.includes(roadmap.id));
}

export function getFeaturedRoadmaps(): HomeFeaturesType[] {
  const roadmaps: HomeFeaturesType[] = getAllRoadmaps();

  return roadmaps.filter((roadmap) => roadmap.featured);
}

export function isInteractiveRoadmap(id: string): boolean {
  return ['frontend', 'backend', 'devops', 'react', 'vue', 'python', 'java', 'blockchain', 'golang', 'javascript', 'nodejs', 'qa', 'design-system', 'angular', 'software-architect', 'software-design-architecture', 'aspnet-core', 'flutter', 'computer-science'].includes(id);
}
