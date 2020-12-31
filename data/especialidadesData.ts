import DermatologiaSvg from '../icons/Dermatology';
import OtorrinoLaringologiaSvg from '../icons/OtorrinoLaringologia';
import NeumonologiaPediatricaSvg from '../icons/Pediatria';
import TraumatolgiaSvg from '../icons/Traumatologia';
import DiagnosticoPorImagenesSvg from '../icons/DiagnosticoPorImagenes';

interface Especialidad {
    title: string;
    icon: () => JSX.Element;
}

export const especialidades: Especialidad[] = [
    {
        title: 'Diagnóstico por Imágenes',
        icon: DiagnosticoPorImagenesSvg
    },
    {
        title: 'Neumología Pediatrica',
        icon: NeumonologiaPediatricaSvg
    },
    {
        title: 'Traumatología',
        icon: TraumatolgiaSvg
    },
    {
        title: 'Dermatología',
        icon: DermatologiaSvg
    },
    {
        title: 'Otorrinolaringología',
        icon: OtorrinoLaringologiaSvg
    }
]