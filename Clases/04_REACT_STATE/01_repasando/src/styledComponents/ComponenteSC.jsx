import styled from 'styled-components'

const CuadradoGris = styled.div`
    background-color: lightgray;
    min-height: 500px;
    padding: 1.5rem;
`;

const CuadradoAmarillo = styled.div`
    background-color: yellow;
    min-height: 100px;
`;

const ComponenteSC = () => {
    return (
        <>
            <CuadradoGris className="d-none d-sm-block d-md-none">
                <CuadradoAmarillo />
            </CuadradoGris>
        </>
    )
}

export default ComponenteSC