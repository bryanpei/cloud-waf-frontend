import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const SiteList = ({ hosts=[] }) => {
  return (
    <Container className='mt-5'>
      <h2>Added websites</h2>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>Site</th>
            <th>Origin</th>
          </tr>
        </thead>
        <tbody>
          {hosts && hosts.map(host => (
            <tr>
              <td>{host.hostname}</td>
              <td>{host.origin}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

  )
}

export default SiteList
