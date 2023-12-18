"use client";
import { useEffect, useState } from "react";
import Button from "./components/button";
import Graph from "./components/graph";
import NodeSelector from "./components/nodeSelector";
import { calculatePageRank } from "./func/pagerank";

const GRAPH = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [0, 1, 1, 0],
];

export default function Home() {
  const [graph, setGraph] = useState(GRAPH);
  const [pageRanks, setPageRanks] = useState<number[]>([]);
  const [fromNode, setFromNode] = useState(0);
  const [toNode, setToNode] = useState(0);
  const [nodeToRemove, setNodeToRemove] = useState(0);

  useEffect(() => {
    const ranks = calculatePageRank(graph);
    setPageRanks(ranks);
  }, [graph]);

  const addNode = () => {
    const updatedGraph = [...graph, new Array(graph.length).fill(0)];
    updatedGraph.forEach((row) => row.push(0));
    setGraph(updatedGraph);
  };

  const addEdge = () => {
    if (
      fromNode >= 0 &&
      toNode >= 0 &&
      fromNode < graph.length &&
      toNode < graph.length
    ) {
      const updatedGraph = [...graph];
      updatedGraph[fromNode][toNode] = 1;
      setGraph(updatedGraph);

      setFromNode(0);
      setToNode(0);
    }
  };

  const removeNode = () => {
    let tempGraph = [...graph];
    tempGraph.splice(nodeToRemove, 1);
    setGraph(tempGraph);

    setNodeToRemove(0);
  };

  return (
    <main className="flex min-h-screen items-start justify-between p-24">
      <div className="flex items-start flex-col justify-between font-mono text-sm lg:w-1/2">
        <div className="m-2">
          <Button label="Add Node" onClick={addNode} />
        </div>

        <div className="m-2">
          <div className="flex items-center space-x-4">
            <NodeSelector
              label="From Node"
              value={fromNode}
              onChange={setFromNode}
              nodesCount={graph.length}
            />

            <NodeSelector
              label="To Node"
              value={toNode}
              onChange={setToNode}
              nodesCount={graph.length}
            />
          </div>
          <Button label="Add Edge" onClick={addEdge} />
        </div>

        <div className="m-2">
          <NodeSelector
            label="Remove"
            value={nodeToRemove}
            onChange={setNodeToRemove}
            nodesCount={graph.length}
          />
          <Button label="Remove Node" onClick={removeNode} />
        </div>

        <div className="m-2">
          <table className="min-w-full divide-y border divide-gray-200">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left"
                >
                  Node
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left "
                >
                  PageRank
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pageRanks.map((rank, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{index}</td>
                  <td className="px-6 py-4">{(rank * 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lg:w-1/2">
        <Graph graph={graph} />
      </div>
    </main>
  );
}
