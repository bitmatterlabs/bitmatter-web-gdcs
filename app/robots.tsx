import { MetadataRoute } from "next";

const githubActionsWorkflow = {
  isActionRunning: process.env.GITHUB_ACTIONS || false,
  repo: process.env.GITHUB_REPOSITORY?.toString().replace(
    new RegExp(`^${process.env.GITHUB_REPOSITORY_OWNER || ""}`),
    ""
  ),
  repoOwner: process.env.GITHUB_REPOSITORY_OWNER,
};

const siteUrl = githubActionsWorkflow.isActionRunning
  ? `https://${githubActionsWorkflow.repoOwner}.github.io/${githubActionsWorkflow.repo}`
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
