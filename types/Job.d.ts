type tagType = "junior" | "mid" | "senior";
type contractType = "permanent" | "b2b";
type statusType = "applied" | "rejected" | "interview" | "accepted";
export type Job = {
  id: number
  name: string
  location: string
  position: string
  tag: tagType
  salary: number
  contract: contractType
  time: string
  status: statusType
}