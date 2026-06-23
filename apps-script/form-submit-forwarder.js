/**
 * Example Google Apps Script for a Google Form / Sheet workflow.
 *
 * Usage:
 * - attach this script to the response Sheet or Form project
 * - add an installable trigger for onFormSubmit
 * - fill in WEBHOOK_URL and API_KEY_STORAGE strategy
 *
 * Recommended:
 * - store secrets in Script Properties
 * - forward to your own endpoint rather than calling the model directly
 */

const WEBHOOK_URL = 'https://your-endpoint.example.com/api/intake';

function onFormSubmit(e) {
  if (!e || !e.namedValues) {
    throw new Error('Missing form submission payload');
  }

  const payload = normalizeSubmission(e.namedValues);

  const response = UrlFetchApp.fetch(WEBHOOK_URL, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  Logger.log('Webhook status: %s', response.getResponseCode());
  Logger.log('Webhook body: %s', response.getContentText());
}

function normalizeSubmission(namedValues) {
  const normalized = {};

  Object.keys(namedValues).forEach((key) => {
    const value = namedValues[key];
    normalized[key] = Array.isArray(value) ? value.join(', ') : value;
  });

  return {
    submittedAt: new Date().toISOString(),
    source: 'google-form',
    answers: normalized,
  };
}
