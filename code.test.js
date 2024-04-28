
const fs = require('fs');
let assert = require('assert')
eval(fs.readFileSync('code.js')+'');

let testCases = [
    {
        graph1: [[1, 2], [0, 2, 3], [0, 1, 3], [1, 2]],
        graph2: [[0, 2], [1, 2, 3], [0, 1, 3], [0, 1]],
        expectResult: true,
    },
  
    {
        graph1: [[1, 2], [0, 2, 3], [0, 1, 3], [1, 2]],
        graph2: [[0], [1], [2]], // Different vertex count
        expectResult: false,
    },
  
    {
        graph1: [[1, 2], [0, 2], [0, 1]],
        graph2: [[0], [1], [1]], // Different degree sequences
        expectResult: true,
    },
  
    {
        graph1: [[1], [2], [3]],
        graph2: [[1], [0]], // Vertex 0 in graph2 has no corresponding neighbor
        expectResult: false,
    },
  
    {
        graph1: [[1, 2], [0], [3]],
        graph2: [[0, 2], [1], [3]],
        expectResult: true,
    }
];

function runTests(testCase) {
    let allPassed = true;  // Flag to track overall test pass/fail
    for (const thisCase of testCase) {
        const { graph1, graph2, expectResult } = thisCase;
        const actualResult = are_isomorphic(graph1, graph2);
        if (actualResult !== expectResult) {
            console.error(`Test Case Failed:`);
            console.error(`  - Graph 1: ${JSON.stringify(graph1)}`);
            console.error(`  - Graph 2: ${JSON.stringify(graph2)}`);
            console.error(`  - Expected Result: ${expectResult}`);
            console.error(`  - Actual Result: ${actualResult}`);
            allPassed = false; // Mark test failure
        }
    }
    return allPassed;
}

assert(runTests(testCases));