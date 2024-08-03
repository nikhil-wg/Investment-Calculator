import Logo from "../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="logo showing the money bag" />
      <h1>Invertory Calculater</h1>
    </header>
  );
}
