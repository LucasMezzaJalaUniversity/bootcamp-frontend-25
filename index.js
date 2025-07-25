class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 3px solid;
          width: 20vw;
        }
        .user-info {
          padding: 1em;
          background-color: #313131;
          text-align: center;
        }  
        .user-info h2 {
          color: white;
          margin: 0;
        }
        .user-info img {
          border-radius: .25em;
          aspect-ratio: 1 / 1;
        }
        .user-role {
          padding: 1em;
          background-color: red;
          text-align: center;
        }
        .user-role p {
          color: white;
          margin: 0;
          font-weight: bold;
          font-size: 1.2em;
        }
        img {
          width: 100%;
        }
      </style>

      <div class="card">
        <div>
          <img src="https://lpz.ucb.edu.bo/wp-content/uploads/2021/10/Jalasoft.png" alt="Image">
        </div>
        <div class="user-info">
          <img src="https://cdn.pixabay.com/photo/2013/07/12/12/02/people-145129_640.png" alt="Image">
          <h2>User Name</h2>
        </div>  
        <div class="user-role">
          <p>Developer</p>
        </div>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);