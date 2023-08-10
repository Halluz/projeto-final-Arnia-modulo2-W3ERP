import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`

const PaginationButton = styled.button<{
  active?: boolean
  notOperable?: boolean
}>`
  padding: 8px;
  background-color: ${props => (props.active ? '#007bff' : 'transparent')};
  color: ${props => (props.active ? 'white' : '#007bff')};
  border: 1px solid #007bff;
  cursor: pointer;
  ${props =>
    props.notOperable ? 'border: 0.1rem solid #80808092; color:#80808092;' : ''}
`

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const [first, setFirst] = useState(1)
  let last_5_pages = []
  for (let i = 0; i < 5; i++) {
    last_5_pages.push(totalPages - i)
  }

  const pagesToShow = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1
  )

  if (totalPages <= 5) {
    return (
      <PaginationContainer>
        <PaginationButton
          disabled={currentPage === 1}
          notOperable={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </PaginationButton>

        {pagesToShow.map(page => (
          <PaginationButton
            key={page + 'pagesToShow'}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PaginationButton>
        ))}

        <PaginationButton
          disabled={currentPage === totalPages}
          notOperable={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Próxima
        </PaginationButton>
      </PaginationContainer>
    )
  } else {
    // totalPages > 5
    console.log('Total de páginas > 5')

    // let pagesToShow = Array.from({ length: 3 }, (_, i) => first + i + 1)
    const pagesToShow2 = Array.from({ length: 3 }, (_, i) => [first + i, i]) // tupla[valor, indice]
    let auxVetLength = 1 //variável usada para saber o momento de atualizar o conteúdo dos botões da paginação

    //Se a página corrente não estiver entre as últimas 5 páginas
    if (last_5_pages.includes(currentPage) === false) {
      return (
        <PaginationContainer>
          <PaginationButton
            disabled={currentPage <= 1}
            onClick={() => {
              auxVetLength = auxVetLength - 1
              if (auxVetLength < 1 && first - pagesToShow2.length >= 1) {
                setFirst(first - pagesToShow.length)
                auxVetLength = pagesToShow.length // "aponta" para o 'último' elemento da paginação"
              }
              ;() => onPageChange(currentPage - 1)
            }}
          >
            Anterior
          </PaginationButton>

          {pagesToShow2.map(page => (
            <PaginationButton
              key={page[0] + 'pagesToShow2'}
              active={page[0] === currentPage}
              onClick={() => {
                auxVetLength = page[1] + 1
                ;() => onPageChange(page[0])
              }}
            >
              {page[0]}
            </PaginationButton>
          ))}

          <PaginationButton>...</PaginationButton>

          <PaginationButton
            active={totalPages === currentPage}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </PaginationButton>

          <PaginationButton
            disabled={currentPage >= totalPages}
            onClick={() => {
              auxVetLength = auxVetLength + 1
              if (auxVetLength > pagesToShow.length) {
                setFirst(first + auxVetLength)
                auxVetLength = 1
              }
              ;() => onPageChange(currentPage + 1)
            }}
          >
            Próxima
          </PaginationButton>
        </PaginationContainer>
      )
    } else {
      //currentePage está nas últimas '5' páginas
      let pagesToShow3 = Array.from(
        { length: Math.min(5, totalPages % 5) },
        (_, i) => i + 1
      )
      if (totalPages % 5 === 0) {
        pagesToShow3 = Array.from({ length: 5 }, (_, i) => i + 1)
      }

      return (
        <PaginationContainer>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Anterior
          </PaginationButton>

          {pagesToShow3.map(page => (
            <PaginationButton
              key={page + 'pagesToShow3'}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationButton>
          ))}

          <PaginationButton
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Próxima
          </PaginationButton>
        </PaginationContainer>
      )
    }
  }
}

export default Pagination
