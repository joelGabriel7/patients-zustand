
import { create } from "zustand";
import { Patient } from './types/index';

type PatientState = {
    patients: Patient[]
}

export const usePatientStore = create<PatientState>(() => ({
    patients: []
}))
