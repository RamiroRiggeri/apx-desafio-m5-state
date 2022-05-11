import { state } from "../../state";

class Footer extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });
  nombre: string = "";
  constructor() {
    super();
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }

  syncWithState() {
    const lastState = state.getState();
    this.nombre = lastState.nombre || "";
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <div style="border:solid 4px aqua; width: 50%;">
      <h4>Soy el footer</h4>
      <h5>Mi nombre es: ${this.nombre}</h5>
    </div>
    `;
  }
}

customElements.define("my-footer", Footer);
