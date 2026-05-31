import { PrismaClient } from "../app/generated/prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding database...")

  // ============================================================
  // COURSES
  // ============================================================

  const courseData = [
    // --- Semester 1 ---
    { code: "CS 100", name: "Roadmap to Computing", credits: 3, recommendedSemester: 1 },
    { code: "MATH 111", name: "Calculus I", credits: 4, recommendedSemester: 1 },
    { code: "ENGL 101", name: "English Composition: Introduction to Academic Writing", credits: 3, recommendedSemester: 1 },
    { code: "PHYS 111", name: "Physics I", credits: 3, recommendedSemester: 1 },
    { code: "PHYS 111A", name: "Physics I Lab", credits: 1, recommendedSemester: 1 },
    { code: "FYS SEM", name: "First-Year Student Seminar", credits: 0, recommendedSemester: 1 },
    // --- Semester 2 ---
    { code: "CS 113", name: "Introduction to Computer Science I", credits: 3, recommendedSemester: 2 },
    { code: "MATH 112", name: "Calculus II", credits: 4, recommendedSemester: 2 },
    { code: "ENGL 102", name: "English Composition: Introduction to Writing for Research", credits: 3, recommendedSemester: 2 },
    { code: "PHYS 121", name: "Physics II", credits: 3, recommendedSemester: 2 },
    { code: "PHYS 121A", name: "Physics II Lab", credits: 1, recommendedSemester: 2 },
    // --- Semester 3 ---
    { code: "CS 114", name: "Introduction to Computer Science II", credits: 3, recommendedSemester: 3 },
    { code: "ELEC 200", name: "CS/IS/IT Elective 200+ (1)", credits: 3, recommendedSemester: 3 },
    { code: "MATH 333", name: "Probability and Statistics", credits: 3, recommendedSemester: 3 },
    { code: "SCI ELEC", name: "Science Elective", credits: 3, recommendedSemester: 3 },
    { code: "HH GER 2", name: "History and Humanities GER 200 Level", credits: 3, recommendedSemester: 3 },
    // --- Semester 4 ---
    { code: "CS 241", name: "Foundations of Computer Science I", credits: 3, recommendedSemester: 4 },
    { code: "CS 280", name: "Programming Language Concepts", credits: 3, recommendedSemester: 4 },
    { code: "IS 350", name: "Computers, Society and Ethics", credits: 3, recommendedSemester: 4 },
    { code: "COM ELEC", name: "COM 312 or COM 313 Communication Elective", credits: 3, recommendedSemester: 4 },
    { code: "MATH 337", name: "Linear Algebra", credits: 3, recommendedSemester: 4 },
    { code: "YWCC 207", name: "Computing & Effective Communication", credits: 1, recommendedSemester: 4 },
    // --- Semester 5 ---
    { code: "CS 288", name: "Intensive Programming in Linux", credits: 3, recommendedSemester: 5 },
    { code: "CS 332", name: "Principles of Operating Systems", credits: 3, recommendedSemester: 5 },
    { code: "SS GER", name: "Social Sciences GER", credits: 3, recommendedSemester: 5 },
    { code: "CS 301", name: "Introduction to Data Science", credits: 3, recommendedSemester: 5 },
    { code: "CS 356", name: "Introduction to Computer Networks", credits: 3, recommendedSemester: 5 },
    // --- Semester 6 ---
    { code: "CS 331", name: "Database System Design & Management", credits: 3, recommendedSemester: 6 },
    { code: "YWCC 307", name: "Professional Development in Computing", credits: 1, recommendedSemester: 6 },
    { code: "CS ELEC 1", name: "CS Elective 300+ (1)", credits: 3, recommendedSemester: 6 },
    { code: "CS 341", name: "Foundations of Computer Science II", credits: 3, recommendedSemester: 6 },
    { code: "CS 350", name: "Intro to Computer Systems", credits: 3, recommendedSemester: 6 },
    { code: "CS 351", name: "Introduction to Cybersecurity", credits: 3, recommendedSemester: 6 },
    // --- Semester 7 ---
    { code: "CS 435", name: "Advanced Data Structures and Algorithm Design", credits: 3, recommendedSemester: 7 },
    { code: "CS 490", name: "Guided Design in Software Engineering", credits: 3, recommendedSemester: 7 },
    { code: "HH GER 3", name: "History and Humanities GER 300+ Level", credits: 3, recommendedSemester: 7 },
    { code: "CS ELEC 2", name: "CS Elective 300+ (2)", credits: 3, recommendedSemester: 7 },
    { code: "CS ELEC 3", name: "CS Elective 300+ (3)", credits: 3, recommendedSemester: 7 },
    // --- Semester 8 ---
    { code: "CS 491", name: "Senior Project", credits: 3, recommendedSemester: 8 },
    { code: "HSS SEM", name: "Humanities and Social Science Senior Seminar GER", credits: 3, recommendedSemester: 8 },
    { code: "CS ELEC 4", name: "CS Elective 300+ (4)", credits: 3, recommendedSemester: 8 },
    { code: "GEN ELEC", name: "General Elective", credits: 3, recommendedSemester: 8 },
    { code: "ELEC 201", name: "CS/IS/IT Elective 200+ (2)", credits: 3, recommendedSemester: 8 },
    // --- Ghost courses (prereq references only, not in curriculum) ---
    { code: "CS 103", name: "Introduction to Computing and Its Applications", credits: 3, recommendedSemester: null },
    { code: "ENGL 100", name: "English Composition: Basic Writing", credits: 3, recommendedSemester: null },
  ]

  const courses = []
  for (const data of courseData) {
    const course = await prisma.course.upsert({
      where: { code: data.code },
      update: {},
      create: data,
    })
    courses.push(course)
  }

  // Build lookup map: code -> course object
  const byCode = Object.fromEntries(courses.map((c) => [c.code, c]))

  console.log(`Upserted ${courses.length} courses`)

  // ============================================================
  // MAJOR
  // ============================================================

  const csMajor = await prisma.major.upsert({
    where: { name: "Computer Science" },
    update: {},
    create: { name: "Computer Science", description: "B.S. in Computer Science" },
  })

  // ============================================================
  // MAJOR COURSES
  // ============================================================

  const curriculumCodes = [
    "CS 100", "MATH 111", "ENGL 101", "PHYS 111", "PHYS 111A", "FYS SEM",
    "CS 113", "MATH 112", "ENGL 102", "PHYS 121", "PHYS 121A",
    "CS 114", "ELEC 200", "MATH 333", "SCI ELEC", "HH GER 2",
    "CS 241", "CS 280", "IS 350", "COM ELEC", "MATH 337", "YWCC 207",
    "CS 288", "CS 332", "SS GER", "CS 301", "CS 356",
    "CS 331", "YWCC 307", "CS ELEC 1", "CS 341", "CS 350", "CS 351",
    "CS 435", "CS 490", "HH GER 3", "CS ELEC 2", "CS ELEC 3",
    "CS 491", "HSS SEM", "CS ELEC 4", "GEN ELEC", "ELEC 201",
  ]

  for (const code of curriculumCodes) {
    await prisma.majorCourse.upsert({
      where: { majorId_courseId: { majorId: csMajor.id, courseId: byCode[code].id } },
      update: {},
      create: { majorId: csMajor.id, courseId: byCode[code].id },
    })
  }

  console.log(`Linked ${curriculumCodes.length} courses to Computer Science major`)

  // ============================================================
  // PREREQUISITES
  // Each group is an OR set — student must satisfy at least one course per group
  // Multiple groups = AND logic between them
  // ============================================================

  const prereqData: { courseCode: string; groups: string[][] }[] = [
    // CS 113: CS 100 OR CS 103
    { courseCode: "CS 113", groups: [["CS 100", "CS 103"]] },
    // MATH 112: MATH 111
    { courseCode: "MATH 112", groups: [["MATH 111"]] },
    // ENGL 102: ENGL 100 OR ENGL 101
    { courseCode: "ENGL 102", groups: [["ENGL 100", "ENGL 101"]] },
    // PHYS 121: PHYS 111 AND MATH 111
    { courseCode: "PHYS 121", groups: [["PHYS 111"], ["MATH 111"]] },
    // PHYS 121A: PHYS 111 AND MATH 111
    { courseCode: "PHYS 121A", groups: [["PHYS 111"], ["MATH 111"]] },
    // CS 114: CS 113
    { courseCode: "CS 114", groups: [["CS 113"]] },
    // MATH 333: MATH 112
    { courseCode: "MATH 333", groups: [["MATH 112"]] },
    // CS 241: CS 114 AND MATH 112
    { courseCode: "CS 241", groups: [["CS 114"], ["MATH 112"]] },
    // CS 280: CS 114
    { courseCode: "CS 280", groups: [["CS 114"]] },
    // IS 350: CS 100 AND ENGL 101
    { courseCode: "IS 350", groups: [["CS 100"], ["ENGL 101"]] },
    // COM ELEC: ENGL 102
    { courseCode: "COM ELEC", groups: [["ENGL 102"]] },
    // MATH 337: MATH 112
    { courseCode: "MATH 337", groups: [["MATH 112"]] },
    // CS 288: CS 100 AND CS 280
    { courseCode: "CS 288", groups: [["CS 100"], ["CS 280"]] },
    // CS 332: CS 114
    { courseCode: "CS 332", groups: [["CS 114"]] },
    // CS 301: CS 114 AND MATH 333
    { courseCode: "CS 301", groups: [["CS 114"], ["MATH 333"]] },
    // CS 356: CS 280
    { courseCode: "CS 356", groups: [["CS 280"]] },
    // CS 331: CS 114
    { courseCode: "CS 331", groups: [["CS 114"]] },
    // YWCC 307: YWCC 207
    { courseCode: "YWCC 307", groups: [["YWCC 207"]] },
    // CS 341: CS 241 AND CS 280
    { courseCode: "CS 341", groups: [["CS 241"], ["CS 280"]] },
    // CS 350: CS 280
    { courseCode: "CS 350", groups: [["CS 280"]] },
    // CS 351: CS 241 AND CS 356
    { courseCode: "CS 351", groups: [["CS 241"], ["CS 356"]] },
    // CS 435: CS 241 AND CS 288
    { courseCode: "CS 435", groups: [["CS 241"], ["CS 288"]] },
    // CS 490: CS 280 AND CS 288
    { courseCode: "CS 490", groups: [["CS 280"], ["CS 288"]] },
    // CS 491: CS 490
    { courseCode: "CS 491", groups: [["CS 490"]] },
  ]

  await prisma.prerequisite.deleteMany({})

  for (const { courseCode, groups } of prereqData) {
    const course = byCode[courseCode]
    for (let groupId = 0; groupId < groups.length; groupId++) {
      for (const prereqCode of groups[groupId]) {
        const prereq = byCode[prereqCode]
        await prisma.prerequisite.create({
          data: {
            courseId: course.id,
            prerequisiteId: prereq.id,
            groupId,
          },
        })
      }
    }
  }

  console.log("Seeded prerequisites")

  // ============================================================
  // COREQUISITES
  // Stored symmetrically — both directions for each pair
  // ============================================================

  const coreqPairs: [string, string][] = [
  ["PHYS 111", "PHYS 111A"],
  ["PHYS 121", "PHYS 121A"],
]

  await prisma.corequisite.deleteMany({})

  for (const [codeA, codeB] of coreqPairs) {
    const a = byCode[codeA]
    const b = byCode[codeB]
    await prisma.corequisite.create({
      data: { courseId: a.id, corequisiteId: b.id },
    })
    await prisma.corequisite.create({
      data: { courseId: b.id, corequisiteId: a.id },
    })
  }

  console.log("Seeded corequisites")
  console.log("Done!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })