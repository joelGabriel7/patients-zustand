
import { create } from "zustand";
import { DraftPatient, Patient } from './types/index';

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<PatientState>(() => ({
    patients: [],
    addPatient: (data) => {
        console.log(data);
    }
}))
