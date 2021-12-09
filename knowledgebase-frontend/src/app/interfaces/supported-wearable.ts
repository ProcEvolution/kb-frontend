import {Wearable} from './wearable';
import {Activity} from './activity';

export interface SupportedWearable {
    wearable?: Wearable;
    activities?: Activity[];
    percentage?: number;
    rating?: number;
}
