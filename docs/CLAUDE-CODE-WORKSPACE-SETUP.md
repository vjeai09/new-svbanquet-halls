# Claude Code Workspace Setup — Token Optimization

**Problem:** Ruflo and Obsidian MCP servers load globally, wasting tokens in projects that don't need them.

**Solution:** Project-specific MCP server configuration.

---

## Current Setup

### Global Configuration (`~/.claude/mcp.json`)
```json
{
  "mcpServers": {
    "ruflo": {
      "command": "npx",
      "args": ["-y", "ruflo@latest", "mcp", "start"]
    }
  }
}
```
**Impact:** Ruflo loads in ALL projects by default.

### Project-Specific Override (`.claude/settings.json`)
```json
{
  "mcpServers": {
    "ruflo": null  // ✅ Disables Ruflo for this project
  }
}
```
**Impact:** Ruflo won't load when working in `/Users/tusshar/new-svbanquet-halls`.

---

## How It Works

### 1. **Working in SV Banquet Halls** (`/Users/tusshar/new-svbanquet-halls`)
```bash
cd /Users/tusshar/new-svbanquet-halls
claude
```
✅ **Ruflo disabled** — project settings override global config  
✅ **Composio enabled** — only when explicitly needed  
✅ **Token savings:** ~15,000+ tokens/session

### 2. **Working in Obsidian/Brain Folder** (`/Users/tusshar/Documents/brain`)
```bash
cd /Users/tusshar/Documents/brain
claude
```
✅ **Ruflo enabled** — global config applies  
✅ **Ruflo hooks active** — for memory management, swarm, etc.  
✅ **Full MCP tooling** — search_tools, memory_store, hooks_route, etc.

### 3. **Working in Other Projects** (e.g., `multi-agent-stock-analysis`)
```bash
cd /Users/tusshar/multi-agent-stock-analysis
claude
```
⚠️ **Ruflo loads by default** — unless you add project-specific override

---

## Token Impact Analysis

| Workspace | Ruflo Status | MCP Tools Loaded | Tokens/Session |
|---|---|---|---|
| **svbanquet-halls** | ❌ Disabled | 0 (Composio on-demand) | ~5,000 |
| **Documents/brain** | ✅ Enabled | ~20 (full Ruflo suite) | ~25,000 |
| **Other projects** | ⚠️ Enabled (global) | ~20 | ~25,000 |

---

## Disabling Ruflo for Other Projects

If you don't need Ruflo in a specific project, add to `.claude/settings.json`:

```bash
# From project root
mkdir -p .claude
cat > .claude/settings.json <<'EOF'
{
  "mcpServers": {
    "ruflo": null
  }
}
EOF
```

---

## When to Use Which Workspace

### Use `/Users/tusshar/Documents/brain` for:
- ✅ Personal knowledge management (Obsidian notes)
- ✅ Cross-project insights and patterns
- ✅ Memory-intensive workflows (Ruflo memory_store, memory_search)
- ✅ Multi-agent coordination (Ruflo swarm)
- ✅ Advanced automation (Ruflo hooks)

### Use `/Users/tusshar/new-svbanquet-halls` for:
- ✅ Website development (React, content)
- ✅ SEO/marketing work
- ✅ Legal compliance fixes
- ✅ Instagram content (Composio only)
- ✅ Token-efficient sessions

### Use other project folders for:
- ✅ Dedicated project work
- ⚠️ Consider adding `"mcpServers": {"ruflo": null}` if Ruflo isn't needed

---

## Quick Reference

**Check current MCP servers:**
```bash
# Shows which servers are loaded
claude mcp list
```

**View current project settings:**
```bash
cat .claude/settings.json
```

**Token usage tracking:**
- Watch the token counter at bottom of each response
- Target: <10,000 tokens per simple task
- Alert: >30,000 tokens = likely MCP overhead

---

## Troubleshooting

### "I need Ruflo in svbanquet-halls"
Remove the override:
```bash
# Edit .claude/settings.json and remove:
"mcpServers": { "ruflo": null }
```

### "Ruflo is still loading everywhere"
Check global config hasn't changed:
```bash
cat ~/.claude/mcp.json
```

### "I want Ruflo disabled globally"
**Better approach:** Keep global, disable per-project  
**Why:** Easier to enable where needed than vice versa

---

**Last Updated:** 2026-04-25  
**Maintained By:** Tusshar Lingagiri (vjeai.tech@gmail.com)
