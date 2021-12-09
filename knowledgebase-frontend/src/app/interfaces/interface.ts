import {DataType} from './data-type';

export interface Interface {
    id?: string;
    name?: string;

    /* for instance:
        a camera is an Input, because it can make picture,
        a display is an output.
    */
    inOut?: string;
}
