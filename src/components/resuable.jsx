import styled from "styled-components";

export const FormGroupComponent = ({
  type,
  value,
  onChange,
  required,
  label,
  name,
  placeholder,
  passwordVisible,
  setPasswordVisible,
}) => {
  return (
    <FormGroupContainer>
      <Label htmlFor={name}>{label}</Label>
      <Span>
        <Input
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          name={name}
          onChange={(e) => onChange(e)}
          required={required}
          id={name}
          value={value}
          placeholder={placeholder}
        />
        {type === "password" &&
          (passwordVisible ? (
            <i
              className="fi fi-sr-eye"
              onClick={(e) => {
                const el = e.target.previousElementSibling;
                const len = el.value.length;
                el.setSelectionRange(len, len);
                el.focus();
                setPasswordVisible(false);
              }}
            ></i>
          ) : (
            <i
              className="fi fi-sr-eye-crossed"
              onClick={(e) => {
                const el = e.target.previousElementSibling;
                const len = el.value.length;
                el.setSelectionRange(len, len);
                el.focus();
                setPasswordVisible(true);
              }}
            ></i>
          ))}
      </Span>
    </FormGroupContainer>
  );
};

const FormGroupContainer = styled.div`
  margin-bottom: 1.5rem;
`;
const Span = styled.span`
  width: 100%;
  display: block;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 92%;
    transition: 0.3s ease;
    transform: scaleX(0);
    background: var(--primary-color);
    z-index: 4;
  }

  &:focus-within::after {
    transform: scaleX(1);
  }

  i {
    position: absolute;
    right: 1rem;
    z-index: 15;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.7rem 1rem;
  background-color: var(--semi-white);
  width: 100%;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Heading = styled.h1``;

export const PageContainer = styled.div`
  grid-column: 2/-1;
  grid-row: 1 / -1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
