import { calculatePageRank } from "@/app/func/pagerank";

describe("calculatePageRank", () => {
  const graph = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
  ];

  it("should calculate correct PageRank values for the given graph", () => {
    const expectedPageRanks = [0.25, 0.25, 0.25, 0.25];
    const result = calculatePageRank(graph);

    expect(result.map((rank) => rank)).toEqual(
      expectedPageRanks.map((rank) => rank)
    );
  });
});
