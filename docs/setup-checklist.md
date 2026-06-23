# Setup Checklist

## What I Created In This Repo

- documentation for the offer and workflow
- recommended form fields
- prompt templates
- a proposal template
- an example Apps Script webhook forwarder

## What You Still Need To Create

### Google Form

Create a Google Form using the fields in [google-form.md](google-form.md).

Why:

- this is the fastest intake surface
- it reduces back-and-forth before a call

### Google Sheet

Attach the Form to a response Sheet.

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

1. Google Form
2. Google Sheet
3. Apps Script trigger
4. OpenAI API key
5. Basic prompt test
6. Proposal template refinement
7. Optional hosted endpoint on Vercel

## Lowest-Friction First Version

If speed matters most, start with:

- Google Form
- Google Sheet
- manual copy/paste into prompt
- human review

That is enough to start selling.
