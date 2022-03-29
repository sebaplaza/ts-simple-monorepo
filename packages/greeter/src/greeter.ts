/**
 * "Returns a greeting with the given subject."
 *
 * The function's name is "hello". It takes a single parameter, "subject", which has a default value of
 * "world"
 * @param {string} [subject=world] - string = "world"
 * @returns The string "Hello world!"
 */
function hello(subject: string = "world"): string {
  return `Hello ${subject}! ...`;
}

export default hello;
