import { useMemo, useState } from "react";

export default function ShoppingCart() {
  // 상품 목록(고정 데이터)
  const products = [
    { id: 1, name: "노트북", price: 1200000 },
    { id: 2, name: "마우스", price: 50000 },
    { id: 3, name: "키보드", price: 90000 },
  ];

  // 장바구니 state
  const [cart, setCart] = useState([]);

  // 담기(같은 상품 여러 번 담기 가능: 수량 증가)
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        // spread로 불변성 유지하면서 수량만 증가
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 삭제(한 번 누르면 해당 상품 라인 전체 제거)
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 총 금액(derived state)
  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cart]);

  const formatWon = (n) => `${Math.round(n).toLocaleString("ko-KR")}원`;

  return (
    <section className="card">
      <h2 className="title">Shopping Cart</h2>

      {/* 상품 버튼 영역 */}
      <div className="pillRow">
        {products.map((p) => (
          <button key={p.id} className="pill" onClick={() => addToCart(p)}>
            {p.name} ({formatWon(p.price)}) <span className="plus">+</span>
          </button>
        ))}
      </div>

      {/* 장바구니 영역 */}
      <div className="cartBox">
        <div className="cartHeader">장바구니 목록</div>

        {cart.length === 0 ? (
          <div className="empty">아직 담긴 상품이 없어요.</div>
        ) : (
          <ul className="list">
            {cart.map((item) => (
              <li className="item" key={item.id}>
                <div className="left">
                  <div className="name">{item.name}</div>
                  <div className="meta">
                    {formatWon(item.price)} × {item.qty}개
                  </div>
                </div>

                <div className="right">
                  <div className="linePrice">
                    {formatWon(item.price * item.qty)}
                  </div>
                  <button
                    className="btn danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 총 금액 */}
      <div className="total">
        Total: <span className="totalNum">{formatWon(total)}</span>
      </div>
    </section>
  );
}
