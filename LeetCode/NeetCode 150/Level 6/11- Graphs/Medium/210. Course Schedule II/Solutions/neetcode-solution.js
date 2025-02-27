const dfs= (course, prereq, visit, cycle, output) => {
  if (cycle.has(course)) return false;

  if (visit.has(course)) return true;

  cycle.add(course);

  for (const pre of prereq.get(course) || []) 
    if (!dfs(pre, prereq, visit, cycle, output))  return false;
  
  cycle.delete(course), visit.add(course), output.push(course);

  return true;
};

const findOrder = (numCourses, prerequisites) => {
  const prereq = new Map(), output = [], visit = new Set(), cycle = new Set();

  for (const [course, pre] of prerequisites) {
    if (!prereq.has(course)) prereq.set(course, []);
    prereq.get(course).push(pre);
  }

  for (let c = 0; c < numCourses; c++) 
    if (!dfs(c, prereq, visit, cycle, output)) return [];

  return output;
}