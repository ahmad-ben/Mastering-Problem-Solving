/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const courseAndPreMap = {}, visitedCoursesNum = new Set();

  for(let [courseNum, preCourseNum] of prerequisites){
      if(!courseAndPreMap[courseNum]) courseAndPreMap[courseNum] = [];
      courseAndPreMap[courseNum].push(preCourseNum);
  };

  const takeCourse = (courseNum) => {
      let coursePreCoursesArr = courseAndPreMap[courseNum];

      if(!coursePreCoursesArr || !coursePreCoursesArr.length) return true;
  
      if(visitedCoursesNum.has(courseNum)) return false;

      visitedCoursesNum.add(courseNum)

      for(let preCourseNum of coursePreCoursesArr) 
          if(!takeCourse(preCourseNum)) return false;

      courseAndPreMap[courseNum] = [];
      return true;
  };

  for(const courseNum in courseAndPreMap){
      if(!takeCourse(courseNum)) return false;
      visitedCoursesNum.clear();
  };

  return true;
};