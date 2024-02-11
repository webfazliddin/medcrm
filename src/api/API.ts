import client from '@/api'
import type { ILoginPayload, IGetPatient, IPostPatient } from '@/types'

export default {
  login: (payload: ILoginPayload): Promise<any> => {
    return client.post('/api/Account/login', payload)
  },

  PatientGetList: (): Promise<IGetPatient[]> => {
    return client.get('/api/Patients').then((response) => response.data)
  },

  // PatientPost: (payload: IPostPatient) => {
  //   return client.post('/api/Patients', payload)
  // }
  PatientPost: (payload: IPostPatient): Promise<IGetPatient> => {
    return client.post('/api/Patients', payload).then((response) => response.data as IGetPatient);
  }
}
