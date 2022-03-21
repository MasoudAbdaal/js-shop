import { Request } from "express";

interface CustomReq<T> extends Request {
  body: T;
}

export default CustomReq;
