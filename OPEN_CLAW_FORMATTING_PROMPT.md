# Prompt for Open Claw Operator: Blog Post Formatting

## The Problem

The newest blog post (`open-claw-operator.md`, dated Feb 7) has NO rich formatting compared to the first two posts. It's written in plain text without using markdown formatting features.

**Compare the posts:**

**First post (ai-workflows-creative-teams.md) - GOOD formatting:**
- Uses bold statements in body paragraphs: `**The tool:**`, `**The key insight:**`
- Has markdown tables for comparing items
- Uses multiple `###` sub-headers for structure (like `### 1. Research & Discovery`)
- Bold emphasis in lists: `- **Decisions get faster.**`

**Second post (simple-ideas-seriously.md) - GOOD formatting:**
- Bold in lists: `- **Decisions get faster.**`
- Blockquotes: `> "Simplicity is the ultimate sophistication."`
- Bold statements: `**Simple brief. Clear thinking. Beautiful execution.**`

**Newest post (open-claw-operator.md) - BAD formatting (plain text):**
- ❌ NO bold statements in body paragraphs
- ❌ NO `###` sub-headers (only basic `##` headers)
- ❌ NO tables
- ❌ Lists are plain text (not bold)
- ❌ Minimal formatting overall

## What You MUST Do

When writing blog posts as the Open Claw operator, you MUST use rich markdown formatting like the first two posts. Here's what that means:

### 1. Use Bold Statements in Body Paragraphs

**DO THIS:**
```markdown
### 1. Research & Discovery

Before AI, the discovery phase of a project could take a week.

**The tool:** Claude and ChatGPT for research synthesis. We feed them specific frameworks and get structured outputs that we then challenge and refine.

**The key insight:** AI is an ideation partner, not a replacement for creative direction.
```

**NOT THIS (what open-claw-operator.md does):**
```markdown
## A tool that lives in the work

We run an agent called Open Claw.

It's not a novelty.

It's an execution layer.
```

### 2. Use Sub-Headers (`###`) to Break Up Sections

**DO THIS:**
```markdown
## What AI Does Well

### 1. Research & Discovery

Content here...

### 2. First Drafts & Ideation

Content here...

### 3. Code & Development

Content here...
```

**NOT THIS:**
```markdown
## What AI Does Well

Content here without sub-sections...
```

### 3. Use Bold in Lists

**DO THIS:**
```markdown
- **Decisions get faster.** No more three-day email chains about button colors.
- **Quality goes up.** Energy goes into craft, not consensus.
- **Timelines shrink.** Not because you rush, but because you don't waste.
```

**NOT THIS (what open-claw-operator.md does):**
```markdown
- watches for changes
- turns messages into actions
- follows up when something is waiting on you
- keeps the machine moving
```

### 4. Use Tables When Comparing Items

**DO THIS:**
```markdown
## Our Actual Tech Stack

Here's what we use daily, no affiliate links:

| Tool | Use Case | Impact |
|------|----------|--------|
| **Cursor** | Code development | 40% faster shipping |
| **Claude** | Research & writing | Better first drafts |
| **Midjourney** | Visual exploration | Rapid concept testing |
```

## How to Fix open-claw-operator.md Style

Instead of writing:
```markdown
## The Costco test

Here's the kind of moment that matters.

We were out at Costco.

Normal life.

And while we were doing that, Open Claw handled real admin:

- scheduled a primary care appointment in a patient portal
- added it to Google Calendar with clean details and reminders
- invited the patient's iCloud email as an attendee
- generated and emailed a standalone calendar invite (ICS) to the same address
```

Write it like this:
```markdown
## The Costco Test

Here's the kind of moment that matters.

We were out at Costco. Normal life. And while we were doing that, Open Claw handled real admin:

- **Scheduled a primary care appointment** in a patient portal
- **Added it to Google Calendar** with clean details and reminders
- **Invited the patient's iCloud email** as an attendee
- **Generated and emailed** a standalone calendar invite (ICS) to the same address

**The point:** No "I'll do it later." No broken momentum. Just done.
```

## Formatting Checklist

Before publishing, ensure your post has:

- [ ] **Bold statements in body paragraphs** (like `**The tool:**`, `**The key insight:**`, `**The point:**`)
- [ ] **Tables when comparing items, tools, or showing data**
- [ ] **Multiple `###` sub-headers** to break up sections (not just `##`)
- [ ] **Bold in lists:** `- **Item text.** Explanation here.`
- [ ] **Bold emphasis in body paragraphs**, not just lists
- [ ] **Blockquotes for quotes** (if applicable)
- [ ] **Italic for subtle emphasis**

## Reference

Study `ai-workflows-creative-teams.md` and `simple-ideas-seriously.md` - these are the formatting styles you MUST match. Your posts should be as visually rich and structured as those posts, NOT like `open-claw-operator.md` which is written in plain text.

**Remember:** The blog system uses `react-markdown` with GitHub Flavored Markdown. It CAN render rich formatting, but only if you actually USE it in your markdown. Write like the first two posts, not like plain text.
