const sum = (...numbers: number[]) => {
  return numbers.reduce((acc, number) => acc + number, 0);
};

export default sum;

// test
if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('#sum', () => {
    it('returns 0 with no numbers', () => {
      expect(sum()).toBe(0);
    });
  });
}
