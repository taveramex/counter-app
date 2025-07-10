import { appPropTypes } from './App.propTypes';

function App({ title, subtitle }){
   console.log("Render:", { title, subtitle }); // Verifica valores en consola
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
}

App.propTypes = appPropTypes;

App.defaultProps = {
  title: 'No Title',
  subtitle: 'No subtitle',
}

//ChatGPT me dijo que habria problemas si no exporto mis componentes con este patron
// menciono algo de la incompatibilidad de Vite y demas cosas que no entendi pero como 
// eran suficientemente fancy asumi que no me estaba enganando.
export { App };
