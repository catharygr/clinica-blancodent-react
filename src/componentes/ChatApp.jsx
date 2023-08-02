/* eslint-disable react/jsx-no-target-blank */
// import "./ChatApp.css";

// export default function ChatApp() {
//   return (
//     <>
//       <main>
//         <div className="container-primero">
//           <div className="primera-tarjeta"></div>
//           <div className="segunda-tarjeta">
//             <div className="display-movil">
//               <div className="contenido-interno">
//                 <div className="arco-medio"></div>

//                 <ul>
//                   <li className="flecha izq"></li>
//                   <li>
//                     {" "}
//                     <img
//                       src="/assets/imagenes/chatapp/avatar.jpg"
//                       alt="Imagen del avatar"
//                     />
//                   </li>
//                   <li className="primer-encabezado">
//                     <h3> Samuel Green</h3>
//                     <p>Disponibilidad para pasear</p>
//                   </li>
//                   <li className="vl"></li>
//                 </ul>

//                 <p className="para-primero para-izq">
//                   {" "}
//                   Eso suena genial. Estaría feliz con eso.
//                 </p>
//                 <p className="para-segundo para-izq">
//                   {" "}
//                   ¿Podrías enviarme algunas fotos de tu perro, por favor?
//                 </p>
//                 <div className="imagen-div">
//                   <img
//                     className="dog-imagen"
//                     src="/assets/imagenes/chatapp/dog-image-1.jpg"
//                     alt="Imagen de un perro"
//                   />
//                   <img
//                     className="dog-imagen"
//                     src="/assets/imagenes/chatapp/dog-image-2.jpg"
//                     alt="Imagen de un perro"
//                   />
//                   <img
//                     className="dog-imagen"
//                     src="/assets/imagenes/chatapp/dog-image-3.jpg"
//                     alt="Imagen de un perro"
//                   />
//                 </div>

//                 <p className="para-derecho para-ancho-derecho">
//                   Aquí tienes algunas fotos. ¡Ella es una perrita feliz!
//                 </p>
//                 <p className="para-derecho para-derecho-peque">
//                   ¿Puedes hacerlo?
//                 </p>

//                 <p className="para-ultimo para-izq">
//                   {" "}
//                   ¡Se ve tan feliz! El horario que discutimos funciona. ¿Cuánto
//                   tiempo debo sacarla a pasear?
//                 </p>
//                 <div className="circulo subir"></div>
//                 <div className="circulo bajar"></div>
//                 <div>
//                   <p className="pasear pasear-primero">
//                     <span>Paseo de 30 minutos.</span>{" "}
//                     <span className="dolar"> $29</span>{" "}
//                   </p>
//                   <p className="pasear">
//                     <span className="minuto">Paseo de 1 hora.</span>{" "}
//                     <span className="dolar">$49</span>{" "}
//                   </p>
//                 </div>

//                 <p className="tipo-mensaje">Escribe un mensaje...</p>
//                 <div className="enviar-btn">
//                   <i className="flecha derecho"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container-segundo"></div>
//           <h1> Reserva sencilla</h1>

//           <p className="para-tercero">
//             {" "}
//             Mantente en contacto con nuestros paseadores de perros a través de
//             la interfaz de chat. Esto facilita discutir arreglos y hacer
//             reservas. Una vez que se haya completado el paseo, puedes calificar
//             a tu paseador y reservar nuevamente, todo a través del chat..
//           </p>
//         </div>
//         {/* <footer>
//           <div className="atribucion">
//             <a
//               href="https://www.frontendmentor.io?ref=challenge"
//               target="_blank"
//             >
//               Frontend Mentor
//             </a>
//             . hecho por <a href="https://bubulazi.com">bubulazi.com</a>.
//           </div>
//         </footer> */}
//       </main>
//     </>
//   );
// }
import "./ChatApp.css";
export default function ChatApp() {
  return (
    <main>
      <div className="container-primero">
        <div className="tarjeta-primero"></div>
        <div className="tarjeta-segundo">
          <div className="display-movil">
            <div className="contenido-interno">
              <div className="arco-medio"></div>

              <ul>
                <li className="flecha izq"></li>
                <li>
                  {" "}
                  <img
                    src="/assets/imagenes/chatapp/avatar.jpg"
                    alt="avatar-image"
                  />
                </li>
                <li className="primer-encabezado">
                  <h3> Samuel Green</h3>
                  <p>Available to Walk</p>
                </li>
                <li className="vl"></li>
              </ul>

              <p className="para-primero para-izq">
                {" "}
                That sounds great. I’d be happy with that.
              </p>
              <p className="para-second para-izq">
                {" "}
                Could you send over some pictures of your dog, please?
              </p>
              <div className="imagen-div">
                <img
                  className="dog-imagen"
                  src="/assets/imagenes/chatapp/dog-image-1.jpg"
                  alt="dog-image-1"
                />{" "}
                <img
                  className="dog-imagen"
                  src="/assets/imagenes/chatapp/dog-image-2.jpg"
                  alt="dog-image-2"
                />
                <img
                  className="dog-imagen"
                  src="/assets/imagenes/chatapp/dog-image-3.jpg"
                  alt="dog-image-3"
                />
              </div>

              <p className="para-derecho para-ancho-derecho">
                Here are a few pictures. She’s a happy girl!
              </p>
              <p className="para-derecho para-derecho-peque">
                {" "}
                Can you make it?
              </p>

              <p className="para-ultimo para-izq">
                {" "}
                She looks so happy! The time we discussed works. How long shall
                I take her out for?
              </p>

              <div className="circulo subir"></div>
              <div className="circulo bajar"></div>
              <div>
                <p className="pasear pasear-primero">
                  <span className="minuto">30 minute walk</span>{" "}
                  <span className="dolar"> $29</span>
                </p>
                <p className="pasear">
                  {" "}
                  <span className="minuto">30 minute walk</span>{" "}
                  <span className="dolar">$49</span>{" "}
                </p>
              </div>

              <p className="tipo-mensaje">Type a message…</p>
              <div className="enviar-btn">
                <i className="flecha derecho"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-segundo">
        <h1> Simple booking</h1>

        <p className="para-tercero">
          {" "}
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
      <footer>
        <div className="atribucion">
          {" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . hecho por <a href="https://bubulazi.com">bubulazi.com</a>.
        </div>
      </footer>
    </main>
  );
}
