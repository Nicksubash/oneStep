import api from "./api";

export const getAllExams = async () => {
  const res = await api.get("/exam/all");
  return res.data;
};
