export type LearningResource = {
  description: string;
  id: number;
  title: string;
  url: string;
};

const LEARNING_RESOURCES_URL =
  "https://api.sampleapis.com/codingresources/codingResources";

export const fetchLearningResources = async (): Promise<LearningResource[]> => {
  const response = await fetch(LEARNING_RESOURCES_URL);

  if (!response.ok) {
    throw new Error("Unable to load learning resources.");
  }

  const resources = (await response.json()) as LearningResource[];

  return resources.slice(0, 3);
};
