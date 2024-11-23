import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/users`;
export const fetchAllEnrollments = async (userId: string) => {
    const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}`);
    return data;
};
export const deleteEnrollment = async (enrollmentId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
    return response.data;
};
export const createNewEnrollment = async (enrollment: any) => {
    const response = await axios.post(`${ENROLLMENTS_API}/create`, enrollment);
    return response.data;
};