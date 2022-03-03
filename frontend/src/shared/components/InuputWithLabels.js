import { styled } from '@mui/system'

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})

const Label = styled('p')({
  color: '#969849',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
})

const InuputWithLabels = (props) => {
  return <Wrapper>InuputWithLabels</Wrapper>
}

export default InuputWithLabels
