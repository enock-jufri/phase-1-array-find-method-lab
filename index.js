// code your solution here
function superbowlWin(record){
    const match = record.find(entry=>entry.result === 'W')
    if(match){
        return match.year
    }else
    return match
}