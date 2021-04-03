import {GestureResponderEvent, NativeSyntheticEvent, TextInputSubmitEditingEventData} from "react-native";

export type onChangeText = (text: string) => void

export type onSubmit = (e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void

export type onPressOut = null | ((event: GestureResponderEvent) => void)

export const checkedIcon = 'checkbox-marked-outline'

export const unCheckedIcon = 'checkbox-blank-outline'

export const updateIcon = 'pencil-outline'

export const deleteIcon = 'delete-outline'

export interface ITodo {
  id: number
  text: string
  isComplete: boolean
  createdAt: Date | string | undefined
}
