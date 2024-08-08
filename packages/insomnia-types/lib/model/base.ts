export interface BaseModel {
  _id: string;
  type: string;
  parentId: string | null;
  modified: number;
  created: number;
  isPrivate: boolean;
  name: string;
}
