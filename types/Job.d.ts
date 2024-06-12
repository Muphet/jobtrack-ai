type tagType = "junior" | "mid" | "senior" | null;
type contractType = "permanent" | "b2b";
type statusType = "applied" | "rejected" | "interview" | "accepted";
export type Job = {
  id: string
  name: string
  location: string
  position: string
  tag: tagType
  salary: number
  contract: contractType
  time: string
  status: statusType
}