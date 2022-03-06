import React, { useState } from "react";

function Discount() {
  const [showDiscount, setShowDiscount] = useState(true);
  return showDiscount ? (
    <div className="discount">
      <strong>
        Erken Rezervasyonda %50'ye Varan İndirimler! Son Kayıt: 18 Mart
      </strong>
      <button onClick={() => setShowDiscount(false)}>X</button>
    </div>
  ) : null;
}

export default Discount;
