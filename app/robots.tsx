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
  ? githubActionsWorkflow.workflowName === "prod_deployment"
    ? `https://${githubActionsWorkflow.repoOwner}.github.io/${githubActionsWorkflow.repo}`
    : ""
  : "https://gdcservices.ae";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
