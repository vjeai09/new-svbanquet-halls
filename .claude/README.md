# Claude Code Configuration

This project uses minimal Claude Code configuration for low token consumption.

## What's Disabled

- **MCP Servers:** Static website needs no external tool integrations
- **Automation Hooks:** Simple React project, no complex workflows
- **Swarm/Multi-Agent:** Frontend-only work, single-agent sufficient

## What's Enabled

- **Basic Git Commands:** Status, diff, commit, push (allowed by default)
- **NPM Scripts:** Start, test, build (allowed by default)
- **File Operations:** Read (allow), Edit/Write (ask for permission)
- **Screenshot Tool:** `node screenshot-review.js` (allowed)

## Token Optimization

This configuration reduces token consumption by:
- Avoiding MCP tool schema loading (314 tools = ~5K tokens)
- Disabling swarm coordination overhead
- No hook system context
- Project CLAUDE.md reduced from 332 → 160 lines (~50% reduction)

## If You Need More Features

Edit `.claude/settings.json` to enable:
- `mcpServers.enabled: true` — For external integrations
- `hooks.enabled: true` — For automation workflows
