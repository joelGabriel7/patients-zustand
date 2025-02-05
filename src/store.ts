
import { create } from "zustand";
import { DraftPatient, Patient } from './types/index';
import { v4 as uuid } from "uuid";
import { devtools, persist } from "zustand/middleware";


type PatientState = {
    patients: Patient[]
    activeId: string
    addPatient: (data: DraftPatient) => void
    updatePatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return {...patient, id: uuid()}
}

export const usePatientStore = create<PatientState>()(
    devtools(
    persist((set) => ({
    patients: [],
    activeId: '',

    addPatient: (data) => {
        set((state)=>({
            patients: [...state.patients, createPatient(data)]
        }))
    },

    updatePatient: (data) => {
        
        set((state) =>( {
            patients: state.patients.map( patient => patient.id === state.activeId ? {id: state.activeId, ...data} : patient),
            activeId: ''
        }))
    },

    deletePatient: (id) => {

        set((state)=>({
            patients: state.patients.filter( patient => patient.id !== id )
        }))
    },

    getPatientById: (id) => {
        set(()=>({
            activeId : id
        }))

    }

    }), {
        // Save on LS
        name: "patient-zustand-storage"
    })

))
