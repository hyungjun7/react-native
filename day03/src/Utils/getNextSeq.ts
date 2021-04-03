import {ITodo} from "../Types";

export function getNextSeq(data: ITodo[]) {
  return Math.max(...data.map(item => item.id)) + 1
}
