export type FormTitle = {
    title: string;
};

export type FormRadioElement = {
    label: string;
    value: string | number;
}

export type FormElement = {
    type: string;
    label: string;
    points?: FormRadioElement[]
}

export type FormButton = {
    label: string;
    type: string,
    clickHandler: Function
}
