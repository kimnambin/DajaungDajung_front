import { useState } from "react";
import './footer.css'

export default function Footer() {
  let date = new Date();
  let [year, setYear] = useState(date.getFullYear());

  return (
    <div className="footerBox">
      <p className="footerContent">copyright {year}, 브레드 멘토님팀 일행 All Rights Reserved.</p>
    </div>
  )
}
