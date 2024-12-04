import {Status} from './bolsa/Status';
import ExclusionReason from './bolsa/ExclusionReason';
import Scale from './bolsa/Scale';

export default interface PersonnelBolsaInfo {
  dni: string;
  name: string;
  surname: string;
  shift: string;
  treaty: string;
  status: Status;
  exclusionReason: ExclusionReason;
  scale: Scale;
}
