import { MetadataRoute } from "next";

const githubActionsWorkflow = {
  isActionRunning: process.env.GITHUB_ACTIONS || false,
  workflowName: process.env.GITHUB_WORKFLOW || "prod_deployment",
  repo: process.env.GITHUB_REPOSITORY?.toString().replace(
    new RegExp(`^${process.env.GITHUB_REPOSITORY_OWNER || ""}/`),
    ""
  ),
  repoOwner: process.env.GITHUB_REPOSITORY_OWNER,
};

const siteUrl = githubActionsWorkflow.isActionRunning
  ? githubActionsWorkflow.workflowName === "dev_deployment"
    ? "https://gdcs.bitmatterlabs.com/"
    : `https://${githubActionsWorkflow.repoOwner}.github.io/${githubActionsWorkflow.repo}`
  : "https://gdcservices.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date(),
    },
  ];
}
