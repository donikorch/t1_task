export function generateStarArray(rating: number): number[] {
  const roundedRating = Math.round(rating);
  const starsArray = new Array(5).fill(0);

  for (let i = 0; i < roundedRating; i++) {
    if (i < 5) {
      starsArray[i] = 1;
    }
  }

  return starsArray;
}
