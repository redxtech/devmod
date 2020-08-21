/*
 * Gabe Dunn 2020
 * A function that capitalizes a word
 */

// Return a string with the first character.toUpperCase() and the rest the word sliced from index 1 onward.
export const capitalize = (word: string): string =>
	`${word[0].toUpperCase()}${word.slice(1)}`;
