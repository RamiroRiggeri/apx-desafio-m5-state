import { state } from "../../state";

class Header extends HTMLElement {
  shadow: ShadowRoot;
  nombre: string = "";
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.nombre = state.getState().nombre;
    state.subscribe(() => {
      this.nombre = state.getState().nombre;
      this.render();
    });
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    Hola, soy ${this.nombre}
    <form class="form">
      <h3>Nombre nuevo</h3>
      <input type="text" name="nombre" /> 
      <button>Enviar</button>
    </form>
    `;

    const form = this.shadow.querySelector(".form");
    form.addEventListener("submit", (e: any) => {
      e.preventDefault();
      state.setState({
        ...state.getState(),
        nombre: e.target.nombre.value,
      });
    });
  }
}

customElements.define("my-header", Header);
