[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NYae883E)
# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

- In the worst case, the checkIsomorph function explores many potentially invalid mappings due many vertices sharing the same degree. The outerloop of checkIsomorph would iterate through every possible vertex assignments for each vertex (v*v). The inner loop then iterates through each vertices edges, so thets $v^2 * e.$ Thus the worst-case time complexity is bounded by $\Theta(v^2 * e)$ where v is the number of vertices and e is the average number of edges per vertex.