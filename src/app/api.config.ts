import { HttpHeaders } from "@angular/common/http";

const baseUrl = "https://testtask.sebbia.com/v1/news";
const headers = {
  headers: new HttpHeaders({ Accept: "application/json" })
};
export { baseUrl, headers };
