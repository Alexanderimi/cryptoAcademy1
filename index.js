@@ -1,12 +1,4 @@
from collections import defaultdict, deque


class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)
from collections import deque


def bfs(g, source):
@@ -18,7 +10,7 @@ def bfs(g, source):
        node = q.popleft()
        res.append(node)

        for v in g.graph[node]:
        for v in g[node]:
            if v not in visited:
                visited.add(v)
                q.append(v)
