export const SEMESTER_UNSCHEDULED = 0
export const SEMESTER_COMPLETED = 9

export function getSemesterLabel(semester: number): string {
  const labels: Record<number, string> = {
    0: "Unscheduled",
    1: "Freshman Year — Semester 1",
    2: "Freshman Year — Semester 2",
    3: "Sophomore Year — Semester 1",
    4: "Sophomore Year — Semester 2",
    5: "Junior Year — Semester 1",
    6: "Junior Year — Semester 2",
    7: "Senior Year — Semester 1",
    8: "Senior Year — Semester 2",
    9: "Completed/Transfer",
  }
  return labels[semester] ?? `Semester ${semester}`
}