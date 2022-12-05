export interface IPet {
  id:number;
  name:string;
  photoUrls?:string[];
  status?:string;
  tags?:ITag[];
}

export interface ITag {
  id:number;
  name:string;
}