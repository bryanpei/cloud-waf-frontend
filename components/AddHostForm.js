import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const AddHostForm = ({ errorMsg, onSubmit }) => {
  return (
    <Container className='mt-5'>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Domain</Form.Label>
          <Form.Control type="text" placeholder="Enter domain for your website" name="hostname"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text" placeholder="The orgin for your website" name="origin"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
        <Alert key="info" variant="info" className='mt-3'>
          Please update the DNS record of your domain, pointing it to 10.1.10.155 
        </Alert>
        {errorMsg &&
        <Alert key="warning" variant="warning" className='mt-3'>
          {errorMsg}
        </Alert>}

      </Form>
    </Container>

  )
}

export default AddHostForm
