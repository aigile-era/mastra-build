import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { MCPClient } from "@mastra/mcp";

const mcps = new MCPClient({
  servers:  {
    /*semantic_scholar: {
      command: "npx",
      type: "stdio",
      args: [
        "npx",
        "-y",
        "@smithery/cli@latest",
        "run",
        "@openags/paper-search-mcp",
        "--key",
        process.env.SMITHERY_API_KEY
      ],
    }*/
    /*telegram: {
      command: "npx",
      type: "stdio",
      args: [
        "npx",
        "-y",
        "@smithery/cli@latest",
        "run",
        "@NexusX-MCP/telegram-mcp-server",
        "--key",
        process.env.SMITHERY_API_KEY,
        "--profile",
        process.env.SMITHERY_PROFILE_KEY
      ],
    },*/
    scholar: {
      command: "npx",
      type: "stdio",
      args: [
        "npx",
        "-y",
        "@smithery/cli@latest",
        "run",
        "@itsanamune/seo-mcp",
        "--key",
        process.env.SMITHERY_API_KEY,
        "--profile",
        process.env.SMITHERY_PROFILE_KEY
      ],
    },
    
    /*
    zapier: {
      url: new URL(process.env.ZAPIER_MCP_URL)
    },*//*
    trello: {
      url: new URL("https://mcp.composio.dev/composio/server/COMPOSIO_API_KEY_TRELLO"),
    },*/
    // https://www.mcp.run/api/mcp/sse?nonce=NONCE&username=USER&profile=PROFILE&sig=SIG
    // https://mcp.composio.dev/gmail/
  /*github: {
      url: new URL("https://mcp.composio.dev/github/jealous-squeaking-accident-X82jaj"!),
    },*/
  },
});

export const myAgent = new Agent({
  name: 'My Agent',
  instructions: `
      You are a helpful assistant.
`,
  model: openai('gpt-4o'),
  tools: await mcps.getTools(),  
});