// export default function Todo({task}){
//     return (
//         <li>Task: {task}</li>
//     )
// }

// Conditional Rendering There are various options to do this
// Conditional Rendering option 3
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work On"}: {task}
//     </li>
//   );
// }

// // Conditional Rendering option 4 &&
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// Conditional Rendering option 5 ||
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// Conditional Rendering option 5
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finished: {task}</li>;
  } else {
    listItem = <li>Work on: {task}</li>;
  }
  return listItem
}
