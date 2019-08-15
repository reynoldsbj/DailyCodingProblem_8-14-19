describe('SolveProblem([10, 15, 3, 7], 17)', function() {
    it('should return true', function() {
        expect(SolveProblem([10, 15, 3, 7], 17)).toBe(true);
    });
});

describe('SolveProblem([1, 1, 1, 12, 1, 1, 1, 1, 1], 13)', function() {
    it('should return true', function() {
        expect(SolveProblem([1, 1, 1, 12, 1, 1, 1, 1, 1], 13)).toBe(true);
    });
});

describe('SolveProblem([], 17)', function() {
    it('should return false', function() {
        expect(SolveProblem([], 17)).toBe(false);
    });
});

describe('SolveProblem([10, 15, 3, 8], 17)', function() {
    it('should return false', function() {
        expect(SolveProblem([10, 15, 3, 8], 17)).toBe(false);
    });
});