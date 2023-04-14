// export interface ScreenshotType {
//   count: number;
//   next: null;
//   previous: null;
//   results: Result[];
// }

export interface ScreenshotType {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}
