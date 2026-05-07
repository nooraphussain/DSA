// Recursion is a programming technique where:

// A function calls itself to solve a smaller version of the same problem.

// Every recursive function has 2 important parts:

// 1-Base Case:	Stops recursion
// 2-Recursive Case:	Calls itself again

// Functions are stored in the call stack. Then they return one by one.


// Why Recursion is Used

// Recursion is useful when:

// a problem can be divided into smaller identical problems
// the structure itself is recursive

// Real-World Application:
// 1. Tree Traversal - Binary trees naturally use recursion. - 
//         Node
//         ├── Left subtree
//         └── Right subtree
// 2. File System Navigation
//         Folder
//         └── Subfolder
//             └── Subfolder
// 3. DOM Traversal in JavaScript - HTML elements contain nested elements.
// 4. Backtracking Algorithms
//         Used in:
//             Sudoku solvers
//             Maze solving
//             N-Queens problem
// 5. Divide and Conquer Algorithms
//         Examples:
//             Merge Sort
//             Quick Sort
//             Binary Search


// Advantages of Recursion
// 1. Cleaner and Shorter Code
// 2. Natural Fit for Tree/Graph Problems
// 3. Easier Problem Decomposition
// 4. Useful in Divide-and-Conquer

// Disadvantages of Recursion 
// 1. Higher Memory Usage 
// 2. Slower Than Iteration Sometimes
// 3. Harder to Debug
// 4. Risk of Infinite Recursion