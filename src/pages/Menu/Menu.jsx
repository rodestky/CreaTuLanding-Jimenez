import { Card } from "antd";
import styles from "./Menu.module.css";

const { Meta } = Card;


function Menu() {
  // Datos de ejemplo
  const items = [
    { id: 1, name: "Pastel de Calabaza Encantado", desc: "Suave, especiado y horneado con magia.", price: "$$$$" },
    { id: 2, name: "Butterbeer Helada", desc: "Cremosa y refrescante, con espuma dorada.", price: "$$$$" },
    { id: 3, name: "Tarta de Melaza", desc: "Clásico de Hogwarts, dulce y reconfortante.", price: "$$$$" },
    { id: 4, name: "Chocolate de Ranas", desc: "¡Cuidado, pueden saltar! 70% cacao.", price: "$$$$" },
    { id: 5, name: "Caldero de Estofado", desc: "Carne tierna, verduras y hierbas del Bosque Prohibido.", price: "$$$$" },
    { id: 6, name: "Poción de Manzana Encantada", desc: "Dulce, chispeante y con un toque de canela.", price: "$$$$" },
  ];

  return (
    <section id="menu" className={styles.wrapper} aria-label="Sección del menú">
      <div className="container">
        <h2 className={styles.title}>Platos de Fantasia ✨</h2>
        <p className={styles.subtitle}>
          Preparate para sorprendere con sabores mágicos y hechizantes, nada es lo que parece.
        </p>

        <div className={styles.grid}>
          {/*Creamos una card por cada iteracion*/}
          {items.map((it) => (
            <Card   
              key={it.id}
              hoverable
              className={styles.card}
            >
              <Meta title={it.name} description={it.desc} /> {/*(subcomponente de AntD), maquetado para título y descripción.*/}
              <p className={styles.itemPrice}>{it.price}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
