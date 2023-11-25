// import './App.css'

import {
  AppContainer,
  BotaoPesquisar,
  BuscaContainer,
  ComponenteSelect,
  Form,
  InputDate,
  InputDeTexto,
  Label,
  LabelEInputContainer,
  OpcaoSelect,
} from './styles'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ChangeEvent, useState } from 'react'
import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CancelIcon from '@mui/icons-material/Cancel'

const estados = ['São Paulo', 'Acre', 'Alagoas', 'Amapá']
const today = dayjs()

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
}

function App() {
  const [objeto, setObjeto] = useState<string>('')
  const [protocolo, setProtocolo] = useState<string>('')
  const [nomeDoEstado, setNomeDoEstado] = useState<string>('')
  const [modalidade, setModalidade] = useState<string>('')
  const [dataDeAbertura, setDataDeAbertura] = useState<Date | null>(null)
  const [ano, setAno] = useState<Date | null>(null)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <AppContainer>
      <BuscaContainer>
        <Form>
          <LabelEInputContainer>
            <Label htmlFor="objeto-input">Objeto</Label>
            <InputDeTexto
              id="objeto-input"
              // label="Objeto"
              variant="outlined"
              value={objeto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setObjeto(e.target.value)
              }
            />
          </LabelEInputContainer>

          <LabelEInputContainer>
            <Label htmlFor="protocolo-input">Protocolo</Label>
            <InputDeTexto
              id="protocolo-input"
              // label="Protocolo"
              variant="outlined"
              value={protocolo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setProtocolo(e.target.value)
              }
            />
          </LabelEInputContainer>

          <LabelEInputContainer>
            <Label htmlFor="select-estado">Estado</Label>
            <ComponenteSelect
              labelId="select-label-estado"
              id="select-estado"
              value={nomeDoEstado}
              // label="Estado"
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setNomeDoEstado(e.target.value)
              }
            >
              {estados.map((estado, index) => {
                return (
                  <OpcaoSelect value={estado} key={index}>
                    {estado}
                  </OpcaoSelect>
                )
              })}
            </ComponenteSelect>
          </LabelEInputContainer>

          <LabelEInputContainer>
            <Label htmlFor="modalidade-input">Modalidade</Label>
            <InputDeTexto
              id="modalidade-input"
              // label="Protocolo"
              variant="outlined"
              value={modalidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setModalidade(e.target.value)
              }
            />
          </LabelEInputContainer>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DemoContainer components={['DatePicker']}> */}
            <LabelEInputContainer>
              <Label htmlFor="input-date-data-abertura">Data de Abertura</Label>
              <InputDate
                id="input-date-data-abertura"
                format="DD/MM/YYYY"
                // label="Basic date picker"
                value={dataDeAbertura}
                onChange={(newValue: Date) => setDataDeAbertura(newValue)}
                maxDate={today}
              />
            </LabelEInputContainer>

            {/* </DemoContainer> */}
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DemoContainer components={['DatePicker']}> */}
            <LabelEInputContainer>
              <Label htmlFor="datepicker-ano">Ano</Label>
              <InputDate
                id="datepicker-ano"
                // format="YYYY"
                views={['year']}
                onChange={(newYear: Date) => setAno(newYear)}
                value={ano}
                maxDate={today}
                // label="Basic date picker"
              />
            </LabelEInputContainer>

            {/* </DemoContainer> */}
          </LocalizationProvider>

          <BotaoPesquisar variant="contained" onClick={handleOpen}>
            Pesquisar
          </BotaoPesquisar>
        </Form>
      </BuscaContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CancelIcon
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              color: 'black',
              cursor: 'pointer',
            }}
            onClick={handleClose}
          />
          <Card sx={{ maxWidth: '100%', width: '100%', height: '100%' }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100%"
              image="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Card>
        </Box>
      </Modal>
    </AppContainer>
  )
}

export default App
