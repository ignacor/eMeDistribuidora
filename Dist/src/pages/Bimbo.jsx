import ProductListContainer from "../ProductosBimbo/Productlistcontainer";
import Navbarsxd from "../Componentes/Navs";
import Footerxd from "../Componentes/Footer";

function Bimbo () {
const cont ={
    backgroundColor:'#045ba0',
}
    return (
        <>
        <Navbarsxd/>
        <div style={cont}>
        <ProductListContainer/>

        </div>
        <Footerxd/>
        </>
    )
}

export default Bimbo;