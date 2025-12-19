"use client";

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: "2AS" | "BAC 2027";
  teacherId: string;
  content: string;
  exercises: Exercise[];
  createdAt: Date;
}

export interface Exercise {
  id: string;
  lessonId: string;
  question: string;
  solution: string;
  difficulty: "easy" | "hard";
}

export interface Submission {
  id: string;
  studentId: string;
  exerciseId: string;
  solution: string;
  status: "pending" | "approved" | "rejected";
  xpAwarded: number;
  createdAt: Date;
}

export function saveLessons(lessons: Lesson[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("hercules_lessons", JSON.stringify(lessons));
  }
}

export function getLessons(): Lesson[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("hercules_lessons");
  return stored ? JSON.parse(stored) : [];
}

export function saveSubmissions(submissions: Submission[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("hercules_submissions", JSON.stringify(submissions));
  }
}

export function getSubmissions(): Submission[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("hercules_submissions");
  return stored ? JSON.parse(stored) : [];
}

export function addLesson(lesson: Lesson) {
  const lessons = getLessons();
  lessons.push(lesson);
  saveLessons(lessons);
}

export function submitSolution(submission: Submission) {
  const submissions = getSubmissions();
  submissions.push(submission);
  saveSubmissions(submissions);
}

export function approveSubmission(submissionId: string, xp: number) {
  const submissions = getSubmissions();
  const submission = submissions.find(s => s.id === submissionId);
  if (submission) {
    submission.status = "approved";
    submission.xpAwarded = xp;
    saveSubmissions(submissions);
  }
}
