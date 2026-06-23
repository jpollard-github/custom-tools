# Automation Options

## Option 1: Fully Manual

Flow:

- prospect fills out Google Form
- responses land in Google Sheet
- you copy/paste into the prompts in this repo
- you review the output
- you turn it into a proposal

Best for:

- first customer
- fastest validation
- no engineering overhead

## Option 2: Apps Script Trigger

Flow:

- form submits
- Apps Script trigger fires
- data is normalized
- payload is forwarded to your endpoint

Best for:

- keeping the workflow lightweight
- avoiding immediate app build complexity

Reference:

- [apps-script/form-submit-forwarder.js](../apps-script/form-submit-forwarder.js)

## Option 3: Hosted Endpoint

Flow:

- Apps Script forwards to a Next.js or server endpoint
- endpoint logs submission
- endpoint calls OpenAI
- endpoint stores or emails results

Best for:

- better observability
- prompt versioning
- storing specs and proposals

Reference:

- [examples/next-intake-route.ts](../examples/next-intake-route.ts)

## Recommendation

Start with Option 1 or Option 2.

Only build Option 3 when repeated usage justifies it.
