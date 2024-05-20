
import './App.css';




import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ExampleModal from './bootstrapComponent/ExampleModal';
import Alert from 'react-bootstrap/Alert';

function App() {
 
  

  return (
    <div className="App">
      <header ><h1>React Bootstrap</h1></header>
      <body>
      <p className="Text">React Bootstrap : é uma biblioteca de UI construída para aplicativos React que fornece componentes e layouts pré-projetados baseados em Bootstrap. Ele permite que os desenvolvedores criem rapidamente interfaces da web responsivas e móveis usando componentes React.</p>
      <h2>Exemplos de componentes que podemos criar usando React Bootstrap:</h2>
      <h1>1-criar botões</h1>
      <Button variant="primary" >Botão importado do bootstrap</Button>

      <h1>2-criar formulários</h1>

      <Form>
    <Form.Group controlId="formBasicEmail" className='Form'>
      <Form.Label>Meu form</Form.Label>
      <Form.Control type="email" placeholder="Digite o e-mail" />
      <Form.Text className="text-muted">
        Menssagem qualquer: Nunca compartilharemos seu e-mail com mais ninguém.
      </Form.Text>
    </Form.Group>

    <Button variant="primary" type="submit">
      Enviar formulário
    </Button>
  </Form>

  <h1>3-criar modais</h1>

  <ExampleModal/>

  
  <h1>4-criar Alerts</h1>
  <Alert variant="success">
    Mensagem de sucesso!!
  </Alert>
  <Alert variant="danger">
    Mensagem de erro!!
  </Alert>
   
  </body>
    </div>
  );
}

export default App;
