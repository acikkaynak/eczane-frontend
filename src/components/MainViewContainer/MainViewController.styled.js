import styled from "@emotion/styled";
import { BREAKPOINTS } from "../../utils/styled";

export const SPaper = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #182151;
  margin-bottom: 1.5rem;
  @media ${BREAKPOINTS.MD.min} {
    margin-bottom: 3rem;
  }
`;

export const SButton = styled.button`
  width: 30px;
  height: 30px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  pointer-events: auto;
  cursor: pointer;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: block;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;
