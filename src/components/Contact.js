import React from 'react'
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

const Contact = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let { id } = useParams();
    console.log(id);
    console.log(location);

  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </div>
  )
}
// function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//       let location = useLocation();
//       let navigate = useNavigate();
//       let params = useParams();
//       return (
//         <Component
//           {...props}
//           router={{ location, navigate, params }}
//         />
//       );
//     }
  
//     return ComponentWithRouterProp;
//   }
// export default withRouter(Contact)

// function withColor (Component) {
//     return (props) => {
//         return <div style={{color:"red"}}><Component {...props} /></div>
//     }
// }
export default Contact