import {Status} from './Status';
import ExclusionReason from './ExclusionReason';
import Scale from './Scale';

export default interface NurseBolsaInfo{
  dni: string;
  name: string;
  surname: string;
  shift: string;
  treaty: string;
  status: Status;
  exclusionReason: ExclusionReason;
  scale: Scale;
}
