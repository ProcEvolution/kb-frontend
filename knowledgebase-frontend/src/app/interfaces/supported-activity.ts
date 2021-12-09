import {Activity} from './activity';
import {Process} from './process';

export interface SupportedActivity {
    activity?: Activity;
    percentage?: number;
    rating?: number;
    process?: Process;
}
