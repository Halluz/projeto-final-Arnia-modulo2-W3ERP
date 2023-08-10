import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`

const PaginationButton = styled.button<{ active?: boolean }>`
  padding: 8px;
  background-color: ${props => (props.active ? '#007bff' : 'transparent')};
  color: ${props => (props.active ? 'white' : '#007bff')};
  border: 1px solid #007bff;
  cursor: pointer;
`

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void //Na mudança de página
}

const Pagination2: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const pagesToShow = Array.from(
    { length: Math.min(5, totalPages) },
    (_, i) => i + 1
  )

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      {pagesToShow.map(page => (
        <PaginationButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination2
