import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-3">
       <div className="container">
        <nav className="row">
          <ul className="col-3 list-unstyled">
            <li className="font-weight-bold text-uppercase">Prueba</li>
            <li>Autor: Jesús Cuadra</li>
            <li>Back: Node.js (Express)</li>
            <li>Front: React</li>
            <li>Css: Boostrap</li>
          </ul>
        </nav>

       </div>

    </footer>
    // <div className="main-footer">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-3 col-sm-6">
    //         <h4>Lorem</h4>
    //         <ul className="list-unstyled">
    //           <li>Lorem</li>
    //         </ul>
    //       </div>  
    //     </div>
    //     <div className="footer-bottom">
    //       <p className="text-xs-center">
    //         &copy;{new Date().getFullYear} 
    //       </p>
    //     </div>
    //   </div>
    // </div>
    
  )
}

export default Footer