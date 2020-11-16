
export const runOnNthCall = (nth: number, callback: VoidFunction) => {
  let times = 0

  return () => {
    times = times + 1
    if (times === nth) {
      callback()
    }
  }
}
