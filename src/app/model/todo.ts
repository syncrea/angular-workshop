export interface TodoItem {
  no: string;
  title: string;
  description: string;
  done: boolean;
}

export interface TodoMap {
  [k: string]: TodoItem;
}
