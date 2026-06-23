# Workflow Rescue

Workflow Rescue is a lean starter repo for selling and delivering custom internal tools for small businesses.

The near-term goal is not "AI app generation." The near-term goal is:

- capture a business workflow clearly
- identify the operational pain
- generate a structured implementation spec
- turn that into a proposal and build plan

This repo is optimized for Phase 0 and Phase 1:

- Phase 0: manual consulting with AI-assisted discovery
- Phase 1: a lightweight spec generator app

## Core Positioning

Do not sell "AI."

Sell:

- less spreadsheet work
- fewer manual emails
- clearer status tracking
- fewer dropped requests
- faster turnaround for the owner and staff

Suggested positioning:

> Custom Internal Tools for Small Businesses

## MVP Flow

```text
Lead
  -> Google Form
  -> Google Sheet
  -> Webhook
  -> OpenAI / Codex
  -> Workflow Discovery Summary
  -> Proposed Tool Spec
  -> Human Review
  -> Proposal / Quote
  -> Build
```

## Current Status

Already created:

- Google Form
- Google Sheet connected to form responses

Next up:

- Apps Script trigger or hosted webhook endpoint
- OpenAI API connection
- prompt testing with real submissions

## Repo Contents

- [docs/mvp.md](docs/mvp.md) - MVP definition and operating model
- [docs/setup-checklist.md](docs/setup-checklist.md) - what is automated here vs what you must create
- [docs/google-form.md](docs/google-form.md) - recommended intake form fields
- [docs/roadmap.md](docs/roadmap.md) - phased product roadmap
- [docs/offer.md](docs/offer.md) - sales framing and example offers
- [prompts/workflow-discovery.md](prompts/workflow-discovery.md) - prompt for turning a fuzzy process into a business summary
- [prompts/spec-generator.md](prompts/spec-generator.md) - prompt for generating an implementation spec
- [templates/proposal-template.md](templates/proposal-template.md) - consulting proposal starter
- [apps-script/form-submit-forwarder.js](apps-script/form-submit-forwarder.js) - Google Apps Script example to forward form responses
- [examples/spec-output-example.md](examples/spec-output-example.md) - sample generated output

## Recommended Stack

For later productization:

- Next.js
- TypeScript
- Tailwind
- shadcn/ui
- PostgreSQL
- Prisma
- Clerk
- OpenAI
- Vercel
- Neon

For the first revenue-generating version:

- Google Form
- Google Sheet
- Google Apps Script or Sheet-triggered webhook
- OpenAI API
- manual review

## What This Repo Automates

This repo gives you:

- the operating model
- prompts
- structure for client intake
- example automation code
- proposal scaffolding

This repo does not automatically create external services for you. See [docs/setup-checklist.md](docs/setup-checklist.md).

## Suggested Immediate Next Step

1. Choose whether to use Apps Script or a small Next.js endpoint for the webhook step.
2. Add the Sheet trigger and connect it to your processing flow.
3. Paste the prompts into your preferred OpenAI/Codex workflow.
4. Run 3 to 5 real or simulated business workflows through the process.
