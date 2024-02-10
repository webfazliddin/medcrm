import client from "@/api";
import type {
  ILoginPayload, ITreatment, IPostPatient, IGetPatient
} from "@/types";

export default {
  getAuth: () => {
    return client.post("/api/auth").then((response: any) => {
      return response;
    });
  },
  login: (payload: ILoginPayload) => {
    return client.post("/api/Account/login", payload).then((response: any) => {
      return response;
    });
  },
 
  
  POSTPATIENT : (payload: IPostPatient) => {
    client.post("/api/Patients", payload).then(({ data: { data = [] } = {} }) => {
      return data as IGetPatient;
    })
  },

    
  PatientGetList : () => {
    client.get("/api/Patients").then((response: any) => {
      return response;
    })
  },

  GetTreatments : () => {
    client.get("/api/Treatments").then((response: any) => {
      return response;
    })
  },

  PostTreatments: (payload: ITreatment) => {
    return client.post("/api/Treatments", payload).then((response: any) => {
      return response;
    });
  },
};
