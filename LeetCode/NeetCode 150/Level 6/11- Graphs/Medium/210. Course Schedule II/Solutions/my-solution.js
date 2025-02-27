var findOrder = function(numCourses, prerequisites) {
  // Store the courses that have been taken, and the courses that have been visited.
  const finishedCourses = new Set(), visitedCourses = new Set();

  // Store the course number and the prerequisites for that course.
  const courseAndPreMap = new Map();

  // Initialize the map with the course number and an empty array.
  for(let cNum = 0; cNum < numCourses; cNum++) courseAndPreMap.set(cNum, []);

  // Fill the map with the course number and the prerequisites for that course.
  for(let [cNum, preCNum] of prerequisites) 
    courseAndPreMap.get(cNum).push(preCNum);

  // Recursive function to take the course.
  const takeCourse = (cNum) => {
    // If the course has already been finished, return true.
    if(finishedCourses.has(cNum)) return true;

    // If the course has already been visited and it's not finished yet. return false.
    // That means there is a cycle, so return false.
    if(visitedCourses.has(cNum)) return false;

    // Add the course to the visited courses set.
    visitedCourses.add(cNum);

    // Visit the prerequisites courses of the current course.
    for(preCourseNum of courseAndPreMap.get(cNum) || [])
      // Check if any course of the prerequisites return false.
      // that means a cycle detected, return false.
      if(!takeCourse(preCourseNum)) return false;

    // Since we visited all the prerequisites of the current course successfully.
    // Add this course to the finishedCourses Set.
    finishedCourses.add(cNum);

    // Return true, the course has been taken successfully.
    return true;
  };

  // Visit all the courses and take them.
  for(let [cNum] of courseAndPreMap) if(!takeCourse(cNum)) return [];

  return Array.from(finishedCourses);
};