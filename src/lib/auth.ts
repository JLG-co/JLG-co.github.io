"use client";

export type UserRole = "student" | "teacher" | "guest";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  xp: number;
  level: number;
}

const ADMIN_TEACHER = {
  email: "admin@mathcompanion.dz",
  password: "MathTeacher2027!",
  name: "المعلم الإداري",
  id: "admin_teacher_001"
};

export function saveUser(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem("hercules_user", JSON.stringify(user));
  }
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("hercules_user");
  return stored ? JSON.parse(stored) : null;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("hercules_user");
  }
}

export function isTeacher(email: string): boolean {
  return email.toLowerCase() === ADMIN_TEACHER.email;
}

export function registerUser(email: string, password: string, name: string): User | null {
  if (isTeacher(email)) {
    return null;
  }
  
  const user: User = {
    id: Math.random().toString(36).substring(7),
    email,
    name,
    role: "student",
    xp: 0,
    level: 1,
  };
  saveUser(user);
  return user;
}

export function loginUser(email: string, password: string): User | null {
  if (email.toLowerCase() === ADMIN_TEACHER.email && password === ADMIN_TEACHER.password) {
    const teacherUser: User = {
      id: ADMIN_TEACHER.id,
      email: ADMIN_TEACHER.email,
      name: ADMIN_TEACHER.name,
      role: "teacher",
      xp: 9999,
      level: 99,
    };
    saveUser(teacherUser);
    return teacherUser;
  }
  
  const existingUser = getUser();
  if (existingUser && existingUser.email === email && existingUser.role !== "guest") {
    return existingUser;
  }
  
  return null;
}

export function loginAsGuest(): User {
  const guestUser: User = {
    id: "guest_" + Date.now(),
    email: "",
    name: "زائر",
    role: "guest",
    xp: 0,
    level: 0,
  };
  saveUser(guestUser);
  return guestUser;
}

export function requireAuth(): boolean {
  const user = getUser();
  return user !== null && user.role !== "guest";
}
