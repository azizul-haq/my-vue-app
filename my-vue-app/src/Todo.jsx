// export default function Todo({task, isDone}) {
//     return(
//         <div>
//         <li>Task: {task}</li>
//         </div>
//     )
// }
// conditional rendering - 1
// export default function Todo({task, isDone}) {
//     if(isDone === true) {
//         return <li>work on: {task}</li>
//     }else{
//         return <li>work on: {task}</li>
//     }
// }


// conditional rendering -2

// export default function Todo({task, isDone}) {
//     if(isDone) {
//         return <li>work on: {task}</li>
//     }
//     return <li>work on: {task}</li>
// }


// conditional rendering - 3 ternary operator
// export default function Todo({task, isDone}) {
//     return (
//         <li>{isDone ? 'Finished' : 'Work on' }: {task}</li>
//     )
// }

//  conditional rendering - 4: && 
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// conditional rendering - 5: || 
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// conditional rendering -6: 
export default function Todo({task, isDone}) {
    let listItem;
    if(isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}

