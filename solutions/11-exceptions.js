export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export function parseJson(json_string) {
  try {
      return JSON.parse(json_string);
  } catch (error) {
      throw new ParseError('Invalid JSON string');
  }
}
// END
