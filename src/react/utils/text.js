// This module helps finding
// differences in text buffers
export const Diff = require('diff');

export function mergeText(a, b) {
  const diffs = Diff.diffChars(a, b);
  let text = "";
  diffs.forEach(part => {
    if (!part.removed) {
      text += part.value;
    }
  });
  return text;
}
