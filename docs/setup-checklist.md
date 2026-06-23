# Setup Checklist

## What I Created In This Repo

- documentation for the offer and workflow
- recommended form fields
- prompt templates
- a proposal template
- an example Apps Script webhook forwarder

## Current Project Status

Completed outside this repo:

- Google Form created
- Google Sheet created and connected to form responses

## What You Still Need To Create

### Google Form

Status:

- complete

Created using the fields in [google-form.md](google-form.md).

Why:

- this is the fastest intake surface
- it reduces back-and-forth before a call

### Google Sheet

Status:

- complete

Attached to the Form as the response Sheet.

Why:

- it becomes your lead and workflow-intake log
- Apps Script triggers are easiest from the Sheet/Form side

### OpenAI API Key

Create an API key for the model you want to use for workflow discovery and spec generation.

Why:

- the prompts in this repo assume a model call exists

### Webhook Endpoint

Choose one:

1. Google Apps Script calling OpenAI directly
2. Google Apps Script forwarding to a small Next.js or server endpoint
3. Zapier/Make/n8n webhook forwarding into your own backend

Recommended:

Use Google Apps Script first, then graduate to a small Next.js endpoint once you want better logging and versioned prompts.

### Vercel Project

Create this when you want a hosted endpoint or web app.

Why:

- easiest path for the Phase 1 spec generator app

### Database

You do not need a database for Phase 0.

Create Neon/Postgres only when you want:

- saved submissions
- proposal history
- generated specs
- multi-user auth

### Auth

You do not need Clerk for Phase 0.

Create Clerk only when:

- the app has user accounts
- clients need to log in
- you are shipping a shared portal or dashboard

## Recommended Creation Order

1. Apps Script trigger or hosted webhook endpoint
2. OpenAI API key
3. Basic prompt test
4. Proposal template refinement
5. Optional hosted endpoint on Vercel

## Lowest-Friction First Version

If speed matters most, start with:

- existing Google Form
- existing Google Sheet
- manual copy/paste into prompt
- human review

That is enough to start selling.
