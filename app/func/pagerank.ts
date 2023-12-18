import { GraphType } from "../types";

const DAMPING_FACTOR = 0.85;
const CONVERGENCE_THRESHOLD: number = 0.0001;

export function calculatePageRank(graph: GraphType): number[] {
  const N = graph.length;
  let ranks: number[] = Array(N).fill(1 / N);
  let prevRanks: number[] = Array(N).fill(0);

  const hasConverged = (ranks: number[], prevRanks: number[]): boolean => {
    for (let i = 0; i < ranks.length; i++) {
      if (Math.abs(ranks[i] - prevRanks[i]) > CONVERGENCE_THRESHOLD) {
        return false;
      }
    }
    return true;
  };

  while (!hasConverged(ranks, prevRanks)) {
    prevRanks = ranks.slice();

    for (let i = 0; i < N; i++) {
      // Calculate incoming rank from neighbor nodes
      let incomingRank = 0;
      for (let j = 0; j < N; j++) {
        if (graph[j][i] === 1) {
          const outgoingLinks = graph[j].reduce((acc, val) => acc + val, 0);
          incomingRank += ranks[j] / outgoingLinks;
        }
      }
      // calculate rank using pagerank formula
      ranks[i] = (1 - DAMPING_FACTOR) / N + DAMPING_FACTOR * incomingRank;
    }
  }

  return ranks;
}
