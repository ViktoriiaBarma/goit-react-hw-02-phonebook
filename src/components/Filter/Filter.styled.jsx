import styled from 'styled-components';

export const LabelDescr = styled.label`
display: flex;
        flex-direction: column;
        gap: 8px;
        color: rgb(6, 58, 54);
        text-shadow: rgb(255, 255, 255) 0px 1px 1px;
`;

// export const LabelWrapper = styled.div`
//   display: flex;
//   gap: 8px;
//   margin-left: 8px;
// `;

export const Input = styled.input`
 padding: 8px 16px;
        max-width: 100%;
        width: 300px;
        border: 0px;
        outline: 0px;
        border-radius: 8px;
        color: rgb(6, 58, 54);
        background-color: rgb(247, 255, 250);
        box-shadow: rgb(139, 167, 147) 1px 1px 3px inset, rgb(255, 255, 255) -1px -1px 5px inset;
        font-style: italic;
        text-shadow: rgb(255, 255, 255) 0px 1px 1px;
        font-size: 14px;
}
`;