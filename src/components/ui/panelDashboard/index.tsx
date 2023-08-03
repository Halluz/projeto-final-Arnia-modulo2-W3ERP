import { ContainerCards, ContainerPanelDashboard, TitlePanel } from './style'
import { Card } from '../card'
import { CalendarButton } from '../calendarButton'
import { useEffect, useState } from 'react'
import { getInfoPanelDashboard } from '@/config/services/functions'

export type TypePanelDashboard = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}

export const PanelDashboard = () => {
  const [infoPanelDashboard, setInfoPanelDashboard] =
    useState<TypePanelDashboard>({
      percentualTotalClientesAlta: 0,
      percentualTotalClientesBaixa: 0,
      percentualTotalProdutosAlta: 0,
      percentualTotalProdutosBaixa: 0,
      percentualVariacaoClientesAlta: 0,
      percentualVariacaoClientesBaixa: 0,
      percentualVariacaoProdutosAlta: 0,
      percentualVariacaoProdutosBaixa: 0,
      quantidadeClientesAlta: 0,
      quantidadeClientesBaixa: 0,
      quantidadeProdutosAlta: 0,
      quantidadeProdutosBaixa: 0
    })
  useEffect(() => {
    const getInfoPanelDashboard2 = async () => {
      const response = await getInfoPanelDashboard()
      setInfoPanelDashboard(response)
    }
    getInfoPanelDashboard2()
  }, [infoPanelDashboard])
  return (
    <ContainerPanelDashboard>
      <TitlePanel>
        Dashboard <CalendarButton />
      </TitlePanel>

      <ContainerCards>
        <Card
          graphPercentage={infoPanelDashboard.percentualTotalProdutosAlta}
          variation={infoPanelDashboard.percentualVariacaoProdutosAlta}
          quantity={infoPanelDashboard.quantidadeProdutosAlta}
        >
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            produtos{' '}
          </span>
          em alta{' '}
        </Card>
        <Card
          graphPercentage={infoPanelDashboard.percentualTotalProdutosBaixa}
          variation={infoPanelDashboard.percentualVariacaoProdutosBaixa}
          quantity={infoPanelDashboard.quantidadeProdutosBaixa}
        >
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            produtos{' '}
          </span>
          em baixa
        </Card>
        <Card
          graphPercentage={infoPanelDashboard.percentualTotalClientesAlta}
          variation={infoPanelDashboard.percentualVariacaoClientesAlta}
          quantity={infoPanelDashboard.quantidadeClientesAlta}
        >
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            clientes{' '}
          </span>
          em alta
        </Card>
        <Card
          graphPercentage={infoPanelDashboard.percentualTotalClientesBaixa}
          variation={infoPanelDashboard.percentualVariacaoClientesBaixa}
          quantity={infoPanelDashboard.quantidadeClientesBaixa}
        >
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            Clientes{' '}
          </span>
          em baixa
        </Card>
      </ContainerCards>
    </ContainerPanelDashboard>
  )
}
