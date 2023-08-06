function Header() {
  return (
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
  );
}

export default Header
