import styled from 'styled-components'

export const ListWrapper = styled.section`
    body[data-display='grid'] & {
        display: none;
        background-color: var(--borders);
        border-bottom: 1px solid var(--borders);
        display: grid;
        grid-area: posts;
        grid-gap: 1px;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    }
`
