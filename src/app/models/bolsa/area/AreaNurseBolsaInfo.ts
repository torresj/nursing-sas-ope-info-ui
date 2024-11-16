import {Status} from '../Status';
import ExclusionReason from '../ExclusionReason';
import Scale from '../Scale';

export default interface AreaNurseBolsaInfo{
  dni: string;
  name: string;
  surname: string;
  shift: string;
  treaty: string;
  general: Status;
  specific: Status;
  exclusionReasons: ExclusionReason[];
  scale: Scale;
}
