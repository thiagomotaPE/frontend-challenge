import { styled } from "styled-components"
import { ArrowIcon } from "./Arrow-icon"

interface FilterByPriorityProps {}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;

        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 16px;
        }
    }
`

export default function FilterByPriority(props : FilterByPriorityProps){
    return(
        <FilterContainer>
            <button>Organizar por</button>
            <ArrowIcon/>
        </FilterContainer>
    )
}