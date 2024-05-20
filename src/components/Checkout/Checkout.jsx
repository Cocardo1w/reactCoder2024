import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import Context from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });
  const [emailMatch, setEmailMatch] = useState(true);
  const [error, setError] = useState({});
  const [stockAvailable, setStockAvailable] = useState(true);

  const { cart, getTotal, clearCart } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStock = async () => {
      for (const item of cart) {
        const productRef = doc(db, "productos", item.id);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          const currentStock = productDoc.data().stock;
          if (currentStock < item.quantity) {
            setStockAvailable(false);
            break;
          }
        } else {
          setStockAvailable(false);
          break;
        }
      }
    };
    checkStock();
  }, [cart]);

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const validateEmails = () => {
    if (user.email === user.repeatedEmail) {
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!user.name) {
      errors.name = "Tenes que ingresar un nombre";
      Swal.fire({
        title: "Tenes que ingresar un nombre",
        text: "Por favor, vuelva a intentar...",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    if (!user.email) {
      errors.email = "Tenes que ingresar un email";
      Swal.fire({
        title: "Tenes que ingresar un email",
        text: "Por favor, vuelva a intentar...",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    if (!user.repeatedEmail) {
      errors.repeatedEmail = "Tenes que repetir el email";
      Swal.fire({
        title: "Tenes que repetir el email",
        text: "Por favor, vuelva a intentar...",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    if (!user.phone) {
      errors.phone = "Tenes que ingresar un telefono";
      Swal.fire({
        title: "Tenes que ingresar un telefono",
        text: "Por favor, vuelva a intentar...",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const getOrder = async () => {
    const isFormValid = validateForm();
    validateEmails();
    if (isFormValid && emailMatch) {
      const ordersCollection = collection(db, "orders");

      try {
        for (const item of cart) {
          const productRef = doc(db, "productos", item.id);
          const productDoc = await getDoc(productRef);

          const currentStock = productDoc.data().stock;

          if (currentStock < item.quantity) {
            console.log(`No hay stock para ${item.nombre}`);
            Swal.fire({
              title: `No hay stock para ${item.nombre}`,
              text: "Por favor, vuelve a intentar con menos cantidad o elige otro producto.",
              icon: "error",
              confirmButtonText: "Ok",
            });
            return;
          }
        }

        for (const item of cart) {
          const productRef = doc(db, "productos", item.id);
          const productDoc = await getDoc(productRef);
          const currentStock = productDoc.data().stock;

          await updateDoc(productRef, {
            stock: currentStock - item.quantity,
          });
        }

        const order = {
          buyer: user,
          cart: cart,
          total: getTotal(),
        };
        const orderDocRef = await addDoc(ordersCollection, order);
        Swal.fire({
          title: "Gracias por tu compra!",
          text: `El numero de orden es ${orderDocRef.id}`,
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          clearCart();
          navigate("/");
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Error",
          text: "Ocurrió un error al procesar tu pedido. Por favor, intenta nuevamente.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

  return (
    <div>
      <h2 id="Checkout-h2">Datos de facturación</h2>
      <table className="formulario">
        <tbody className="formulario">
          <tr className="formulario">
            <td>
              <input
                type="text"
                name="name"
                placeholder="Ingrese el nombre"
                className="input-color"
                onChange={updateUser}
              />
            </td>
            <td>
              <input
                type="text"
                name="email"
                placeholder="Ingrese el email"
                className="input-color"
                onChange={updateUser}
              />
            </td>
            <td>
              <input
                type="text"
                name="repeatedEmail"
                placeholder="Repita su email"
                className="input-color"
                onChange={updateUser}
              />
            </td>
            <td>
              <input
                type="text"
                name="phone"
                placeholder="Ingrese su telefono"
                className="input-color"
                onChange={updateUser}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="boton-checkout">
        <button onClick={getOrder} className="boton-form checkout">
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Checkout;
