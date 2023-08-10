import React, { useState } from 'react'
import styled from 'styled-components'

const PaginationContainerExternal = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1.6rem;
  width: 100%;
  border: 1px solid blue;
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
  width: 30rem;
  border: 1px solid red;
`

const PaginationButton = styled.button<{ notOperable?: boolean }>`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  ${props =>
    props.notOperable
      ? 'border: 0.1rem solid #80808092; color:#80808092; background: transparent;'
      : ''}
`

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalElements: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalElements,
  onPageChange
}) => {
  return (
    <PaginationContainerExternal>
      <p>Total de itens: {totalElements}</p>

      <PaginationContainer>
        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          notOperable={currentPage <= 1}
        >
          Anterior
        </PaginationButton>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          notOperable={currentPage >= totalPages}
        >
          Próxima
        </PaginationButton>
      </PaginationContainer>
    </PaginationContainerExternal>
  )
}

export default Pagination
