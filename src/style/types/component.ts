import {
    ButtonOptionsProps, GridItemOptionsProps, GridOptionsProps, BoxOptionsProps,
    ButtonGroupOptionsProps, InputOptionsProps, TextareaOptionsProps,
    CheckboxOptionsProps, SwitchOptionsProps, RadioOptionsProps,
    ControlLabelOptionsProps, LinkOptionsProps, ChipOptionsProps,
    ChipDeleteOptionsProps
} from "@/components"
import { StyledObject, RuleSet } from "styled-components"

export type StyleOverrides<
    ComponentOwnerState = Record<string, unknown>
> = StyledObject | ((ownerState: ComponentOwnerState) => StyledObject | RuleSet<object>)

export interface Components {
    TuiButton?: {
        styleOverrides?: StyleOverrides<ButtonOptionsProps>
    },
    TuiGrid?: {
        styleOverrides?: StyleOverrides<GridOptionsProps>
    },
    TuiGridItem?: {
        styleOverrides?: StyleOverrides<GridItemOptionsProps>
    }
    TuiBox?: {
        styleOverrides?: StyleOverrides<BoxOptionsProps>
    },
    TuiButtonGroup?: {
        styleOverrides?: StyleOverrides<ButtonGroupOptionsProps>
    }
    TuiInput?: {
        styleOverrides?: StyleOverrides<InputOptionsProps>
    }
    TuiTextarea?: {
        styleOverrides?: StyleOverrides<TextareaOptionsProps>
    }
    TuiCheckbox?: {
        styleOverrides?: StyleOverrides<CheckboxOptionsProps>
    }
    TuiSwitch?: {
        styleOverrides?: StyleOverrides<SwitchOptionsProps>
    }
    TuiRadio?: {
        styleOverrides?: StyleOverrides<RadioOptionsProps>
    }
    TuiControlLabel?: {
        styleOverrides?: StyleOverrides<ControlLabelOptionsProps>
    }
    TuiLink?: {
        styleOverrides?: StyleOverrides<LinkOptionsProps>
    }
    TuiChip?: {
        styleOverrides?: StyleOverrides<ChipOptionsProps>
    }
    TuiChipDelete?: {
        styleOverrides?: StyleOverrides<ChipDeleteOptionsProps>
    }
}
