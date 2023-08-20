import { MetadataRoute } from "next";

const githubActionsWorkflow = {
  isActionRunning: process.env.GITHUB_ACTIONS || false,
  repo: process.env.GITHUB_REPOSITORY,
  repoOwner: process.env.GITHUB_REPOSITORY_OWNER,
};

const siteUrl = githubActionsWorkflow.isActionRunning
  ? `https://${githubActionsWorkflow.repoOwner}.github.io/${githubActionsWorkflow.repo}`
  : "https://gdcservices.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contactus`,
      lastModified: new Date(),
    },
  ];
}