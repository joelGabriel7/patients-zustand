
import { create } from "zustand";
import { DraftPatient, Patient } from './types/index';
import { v4 as uuid } from "uuid";
import { devtools } from "zustand/middleware";


type PatientState = {
    patients: Patient[]
    activeId: string
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return {...patient, id: uuid()}
}

export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
    patients: [],
    activeId: '',
    addPatient: (data) => {
        set((state)=>({
            patients: [...state.patients, createPatient(data)]
        }))
    },

    deletePatient: (id) => {

        set((state)=>({
            patients: state.patients.filter( patient => patient.id !== id )
        }))
    },

    getPatientById: (id) => {
        console.log(id);
        set(()=>({
            activeId : id
        }))


    }

})))
