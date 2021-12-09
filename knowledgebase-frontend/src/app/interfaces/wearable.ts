import {WearableCategory} from './wearable-category';
import {Interface} from './interface';
import {Feature} from './feature';


export interface Wearable {

    id?: string;
    wearableCategory?: WearableCategory[];
    iconURL?: string;
    description?: number;
    name?: string;
    features?: Feature[];
}
