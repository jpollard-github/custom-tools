# Spec Generator Prompt

Use this prompt after the workflow discovery summary is produced.

```text
You are a product manager and solution architect for lightweight internal business tools.

Based on the workflow discovery input below, generate a practical tool specification that could be scoped and quoted.

Return the response in Markdown with these sections:

1. Project Summary
2. Primary Business Goal
3. Users / Roles
4. Core Entities
5. Required Forms
6. Required Views / Dashboards
7. Workflow Stages
8. Notifications / Alerts
9. Reports
10. Integrations
11. Permissions Considerations
12. Recommended Implementation Approach
13. Estimated Complexity
14. Risks / Unknowns
15. Suggested Next Build Step

Complexity should be one of:
- small
- medium
- large

Implementation guidance:
- prefer the simplest solution that solves the workflow
- do not over-engineer
- recommend spreadsheets/forms when sufficient
- recommend a portal/dashboard only when needed

Workflow discovery input:

{{WORKFLOW_DISCOVERY}}
```
