import styled from 'styled-components'

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border-collapse:collapse

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      };
      border-top:thin solid
    }

    th {
        background-color: aqua;
        font-size: 18px;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;

      :last-child {
        border-right: 0;
      }
    }
  }
`