// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  const uniqueLearnerID = [...new Set(LearnerSubmissions.map(item => item.learner_id))]; // [ 'A', 'B']
    console.log(uniqueLearnerID)
    const result = [];

  function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {
    // here, we would process this data to achieve the desired result.
    
    ;}
    result.push(uniqueLearnerID)

console.log(result)

//   if (courseInfo.id === ) {
//     for LearnerSubmission.learner_id 
//     foreach assignment_id(let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
//   }
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);

//   console.log(CourseInfo.id);

//   if courseInfo.id !== AssignmentGroup.course_id {
//     return an error 'invalid course ID'
//   }
  
