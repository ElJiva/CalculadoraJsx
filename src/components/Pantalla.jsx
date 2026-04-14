function Pantalla(){
    const pantallaStyle = {
    border: '1px solid gray',
    padding: '20px',
    textAlign: 'right',
    fontSize: '2rem',
  };
  return(
    <>
      <div style={pantallaStyle}>{valorPantalla}</div>
    </>
  )


}
export default Pantalla;