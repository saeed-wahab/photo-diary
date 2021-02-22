import { Switch, useLocation, Route} from "react-router-dom";
import PhotoGallery from "./photo-gallery";
import Modal from "./modal";

const ModalSwitch =()=>{
    let location = useLocation();
    let background = location.state && location.state.background;
    console.log(location);
 
    return(<div>
        <Switch location={ background || location}>
            <Route exact path="/" >
                <PhotoGallery /> 
            </Route>
            <Route exact path="/nature" >
                <PhotoGallery /> 
            </Route>
            <Route exact path="/people" >
                <PhotoGallery /> 
            </Route>
            
        </Switch>
      <Route  path="/image/som.jpg" children={<Modal />} />
    </div>
    )

}

export default ModalSwitch;
