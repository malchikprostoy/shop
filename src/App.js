function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.png"
            alt=""
          />
          <div>
            <h3 className="text-uppercase">Shop</h3>
            <p className="opacity-5">Магазин одежды</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={20} src="/img/cart.svg" alt="" />
            <span className="ml-20">1205 сом</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Вся одежда</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/img/1.png" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center cardBottom">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/2.png" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center cardBottom">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/3.png" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center cardBottom">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/4.png" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center cardBottom">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
