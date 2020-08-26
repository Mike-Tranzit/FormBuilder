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
    type: "button" | "submit" | "reset" | undefined
}

export type FormButtons = {
    buttons: FormButton[]
}

export type FormConfigData = Partial<FormTitle & {
    buttons: FormButton[],
    items: FormElement[]
}>
