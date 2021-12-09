import {Wearable} from './wearable';

export interface WearableCategory {

    id?: string;
    name?: string;
    description?: string;
    iconURL?: string;
    wearables?: Wearable[];
}
