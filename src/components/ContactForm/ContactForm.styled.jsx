import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 8px;
  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
font-size: 20px;
  max-width: 100%;
  width: 500px;
  color: rgb(6, 58, 54);
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
`;

export const FieldFormik = styled.input`
  padding: 8px 16px;
  max-width: 100%;
  border: 0px;
  outline: 0px;
  border-radius: 8px;
  margin-top:10px;

  color: rgb(6, 58, 54);
  background-color: rgb(247, 255, 250);
  box-shadow: rgb(139, 167, 147) 1px 1px 3px inset,
    rgb(255, 255, 255) -1px -1px 5px inset;
  font-style: italic;
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
  font-size: 14px;
`;

// export const ErrorMessage = styled(FormikError)`
//   max-width: 500px;
//   font-style: italic;
//   color: #9e0202;
// `;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  max-width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 10px 10px 5px 0px;
  transition: all 0.2s ease-in-out 0s;
  background-color: rgb(124, 167, 140);
  color: rgb(255, 255, 255);
  cursor: pointer;

  :hover,
  :focus {
    background-color: rgb(177, 223, 193);
    color: rgb(6, 58, 54);
    box-shadow: rgb(255, 255, 255) -2px -2px 5px, rgb(139, 167, 147) 2px 2px 5px;
  }
`;
