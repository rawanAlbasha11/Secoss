// src/redux/boardSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  boards: [
    {
      year: "مجلس الإدارة العشرين",
      period: "22 / 5 / 2025 ولغاية تاريخه",
      president: "الأستاذ محمد زهير تغلبي",
      vicePresident: "الأستاذ محمد حلاق",
      secretary: "الأستاذ فؤاد اللحام",
      treasurer: "الأستاذة رانية عبد ربه",
      members: ["هنا الحسيني", "أ. محمد شبارق", "د. عامر خربوطلي", "أ. طريف صابوني", "د. رشا سيروب"]
    },
    {
      year: "مجلس الإدارة التاسع عشر",
      period: "13 / 5 / 2023 حتى 22 / 4 / 2025",
      president: "الدكتور كمال شرف",
      vicePresident: "الأستاذ محمد زهير تغلبي",
      secretary: "الأستاذ فؤاد اللحام",
      treasurer: "الأستاذة رانية عبد ربه",
      members: ["هنا الحسيني", "د. رشا سيروب", "د. عامر خربوطلي", "أ. محمد بكر", "أ. محمد حلاق"]
    },
    {
      year: "مجلس الإدارة الثامن عشر",
      period: "27 / 3 / 2021 ولغاية 13 / 5 / 2023",
      president: "الدكتور كمال شرف",
      vicePresident: "الأستاذ محمد زهير تغلبي",
      secretary: "الأستاذ فؤاد اللحام",
      treasurer: "الأستاذة هنا الحسيني",
      members: ["محمد بسام السباعي", "عامر خربوطلي", "عصام الشيخ أوغلي", "د. رشا سيروب", "طالب قطون"]
    }
  ]
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {}
})

export default boardSlice.reducer