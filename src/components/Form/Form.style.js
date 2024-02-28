import styled from 'styled-components';

export const StyledForm = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 100px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    background: #1a212b;
    padding: 10px;
    border-radius: 10px;
    border-left: 1px solid #ddd;

    label {
      font-size: 20px;
      color: #ddd;
      font-weight: 500;
    }
    input {
      padding: 10px 5px;
    }
    textarea {
      min-height: 70px;
    }
    button {
      display: block;
      width: 50%;
      margin: 0 auto;
      padding: 15px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
