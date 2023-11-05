import { styled } from 'styled-components'
import { styled as styledMaterialUi } from '@mui/material/styles'
import { FormControl } from '@mui/base/FormControl'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

export const AppContainer = styled.div`
  background-color: black;
  max-width: 100vw;
  width: 100vw;
`

export const BuscaContainer = styled.div`
  background-color: gray;
  height: 250px;
  width: 100%;
  max-width: 100%;
  padding: 0 3rem;
`

export const Form = styledMaterialUi(FormControl)`
  height: 100%;
  // display: flex;
  // align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
`

export const LabelEInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const InputDeTexto = styledMaterialUi(TextField)`
  width: 100%;
`

export const InputDate = styledMaterialUi(DatePicker)``

export const Label = styledMaterialUi(InputLabel)``

export const ComponenteSelect = styledMaterialUi(Select)`
  width: 100%;
`

export const OpcaoSelect = styledMaterialUi(MenuItem)``

export const BotaoPesquisar = styledMaterialUi(Button)`
  width: 100%;
  height: 32px;
`
