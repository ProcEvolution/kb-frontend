import {Wearable} from './wearable';
import {SupportedActivity} from './supported-activity';
import {Process} from './process';

export interface ActivityResult {
    wearable?: Wearable;
    supportedActivity?: SupportedActivity[];
    process?: Process;
}
