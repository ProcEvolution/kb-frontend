import {ProcessCategory} from './process-category';
import {Activity} from './activity';

export interface Process {

    id?: string;
    name?: string;
    processCategory?: ProcessCategory[];
    activities?: Activity[];
}
