import { Patient } from '../types/index';
import { PatientDetailItem } from './PatientDetailItem';
import { usePatientStore } from '../store';

type PatientDetailsProps = {
    patient: Patient
}

export const PatientDetails = ({patient} : PatientDetailsProps) => {

  const deletePatient = usePatientStore(state => state.deletePatient)
  const getPatientById = usePatientStore(state => state.getPatientById)
  
  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg'>
       <PatientDetailItem  label='ID' data={patient.id}/>
       <PatientDetailItem  label='Nombre' data={patient.name}/>
       <PatientDetailItem  label='Propietario' data={patient.caretaker}/>
       <PatientDetailItem  label='Email' data={patient.email}/>
       <PatientDetailItem  label='Fecha de Alta' data={patient.date.toString()}/>
       <PatientDetailItem  label='Sintomas' data={patient.symptoms}/>

       <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase cursor-pointer"
        onClick={() => getPatientById(patient.id)}
        >Editar
        </button>
        <button 
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase cursor-pointer"
            onClick={() => deletePatient(patient.id)}
          > Eliminar
          </button>
       </div>
    </div>
  )
}
