import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { MCPClient } from "@mastra/mcp";

const mcps = new MCPClient({
  servers:  {
    semantic_scholar: {
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
    },
  },
});

export const paperAgent = new Agent({
  name: 'Paper Agent',
  instructions: `
      You are a helpful paper assistant that provides paper information.
`,
  model: openai('gpt-4o'),
  tools: await mcps.getTools(),  
});