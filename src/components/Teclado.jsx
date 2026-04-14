function Teclado (){
      //Estilos
  const tecladoStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  };

  const buttonStyle = {
    padding: '15px',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

      //Teclas
  const teclas = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+',
  ];

  return (
    <>
    {/* Teclado */}
      <div style={tecladoStyle}>
        {teclas.map((tecla) => (
          <button
            key={tecla}
            style={buttonStyle}
            onClick={() => presionarTecla(tecla)}
          >
            {tecla}
          </button>
        ))}
      </div>
    </>
  );


}

export default Teclado;