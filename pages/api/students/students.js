import nc from "next-connect";
import { getAllStudentDetails } from "../../../controller/students";

const handler = nc();

handler.get(getAllStudentDetails);

export default handler;
