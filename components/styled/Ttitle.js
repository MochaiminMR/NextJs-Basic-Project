import styled from "styled-components";

const Title = styled.h2 `
fontSize: 1.5rem;
color: ${(props) => props.color};
fontWeight: 700;
`

Title.defaultProps = {
    color: '#0000FF',
}

export default Title;