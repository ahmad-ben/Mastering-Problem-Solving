const findRedundantConnection = (edges) => {
  const n = edges.length;

  // Create `nodes/edges + 1` empty arrays. 
  const adj = Array.from({ length: n + 1 }, () => []);

  const dfs = (node, parent, visited) => {
    if (visited[node]) return true;

    visited[node] = true;

    for (const nei of adj[node]) {
      if (nei === parent) continue;
      if (dfs(nei, node, visited)) return true;
    }

    return false;
  };

  for (const [u, v] of edges) {
    adj[u].push(v), adj[v].push(u);

    const visited = Array(n + 1).fill(false);

    if (dfs(u, -1, visited)) return [u, v];
  };
};