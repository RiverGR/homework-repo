import { useState } from "react";

function ProfileCard() {
  const [flipped, setFlipped] = useState(false);
  const [like, setLike] = useState(0);

  const handleFlip = () => setFlipped((p) => !p);

  const handleLike = (e) => {
    e.stopPropagation();

    const btn = e.currentTarget;
    btn.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.3)" },
        { transform: "scale(1)" },
      ],
      { duration: 180, easing: "ease-out" },
    );

    setLike((p) => p + 1);
  };

  return (
    <div style={wrap}>
      <div onClick={handleFlip} style={cardOuter}>
        <div
          style={{
            ...cardInner,
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <section style={{ ...face, ...front }}>
            <div style={topRow}>
              <div style={avatarWrap}>
                <div style={avatar}>👤</div>
                <div style={statusDot} />
              </div>

              <div style={{ minWidth: 0 }}>
                <div style={name}>User: RiverGR</div>
                <div style={role}>Frontend Dev</div>
              </div>
            </div>

            <div style={metaRow}>
              <span style={pill}>React</span>
              <span style={pill}>UI</span>
              <span style={pill}>State</span>
            </div>

            <button onClick={handleLike} type="button" style={likeBtn}>
              <span style={heart}>♥</span>
              <span style={likeNum}>{like}</span>
            </button>
          </section>

          {/* BACK */}
          <section style={{ ...face, ...back }}>
            <div style={backTitle}>Profile Detail</div>
            <div style={backDesc}>
              카드 클릭: Flip
              <br />
              하트 클릭: Like (+1)
              <br />
              stopPropagation으로 이벤트 충돌 방지
            </div>

            <button onClick={handleLike} type="button" style={likeBtnBack}>
              <span style={heart}>♥</span>
              <span style={likeNum}>{like}</span>
            </button>
          </section>
        </div>
      </div>

      <div style={stateText}>
        현재 상태: {flipped ? "뒷면 (Detail)" : "앞면 (Profile)"} | ♥ {like}
        <div style={warn}>
          ▲ 하트 클릭 시 카드 뒤집힘 방지: stopPropagation()
        </div>
      </div>
    </div>
  );
}

/* ===== styles ===== */

const wrap = {
  display: "grid",
  placeItems: "center",
  gap: "14px",
};

/* 카드 3D 컨테이너 */
const cardOuter = {
  width: "380px",
  height: "190px",
  perspective: "1000px",
};

const cardInner = {
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 520ms cubic-bezier(.2,.8,.2,1)",
  borderRadius: "18px",
};

/* 앞/뒤 공통 */
const face = {
  position: "absolute",
  inset: 0,
  padding: "18px",
  boxSizing: "border-box",
  borderRadius: "18px",
  backfaceVisibility: "hidden",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow: "0 18px 55px rgba(0,0,0,0.60)",
  overflow: "hidden",
};

const front = {
  background: "linear-gradient(180deg, rgba(10,20,35,0.96), rgba(0,0,0,0.98))",
};

const back = {
  transform: "rotateY(180deg)",
  background: "linear-gradient(180deg, rgba(0,0,0,0.98), rgba(10,20,35,0.96))",
};

/* 상단 */
const topRow = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const avatarWrap = {
  position: "relative",
  width: 46,
  height: 46,
};

const avatar = {
  width: "46px",
  height: "46px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.08)",
  display: "grid",
  placeItems: "center",
  fontSize: "20px",
  border: "1px solid rgba(255,255,255,0.10)",
};

const statusDot = {
  position: "absolute",
  right: 2,
  bottom: 2,
  width: 10,
  height: 10,
  borderRadius: "999px",
  background: "rgba(34,197,94,0.95)",
  boxShadow: "0 0 0 3px rgba(0,0,0,0.75)",
};

const name = {
  color: "rgba(255,255,255,0.94)",
  fontWeight: 900,
  fontSize: "18px",
  letterSpacing: "-0.02em",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const role = {
  marginTop: "4px",
  color: "rgba(255,255,255,0.62)",
  fontSize: "12px",
};

/* 태그 */
const metaRow = {
  display: "flex",
  gap: "8px",
  marginTop: "14px",
};

const pill = {
  padding: "6px 10px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  color: "rgba(255,255,255,0.72)",
  fontSize: "12px",
};

/* 좋아요 버튼 */
const likeBtn = {
  position: "absolute",
  right: "18px",
  bottom: "18px",

  display: "flex",
  alignItems: "center",
  gap: "6px",

  padding: "6px 10px",

  background: "transparent",
  border: "none",

  color: "rgba(255,255,255,0.9)",
  fontWeight: 800,
  fontSize: "14px",

  cursor: "pointer",

  transition: "all 0.2s ease",

  textShadow: "0 0 8px rgba(251,113,133,0.35)",

  filter: "brightness(1.2)",
};

const likeBtnBack = {
  ...likeBtn,
};

const heart = {
  color: "#fb7185",
  fontSize: "18px",
  lineHeight: 1,

  transition: "transform 0.15s ease, filter 0.15s ease",
};

const likeNum = {
  fontWeight: 900,
  fontSize: "14px",
};

/* 뒷면 */
const backTitle = {
  color: "rgba(255,255,255,0.92)",
  fontWeight: 900,
  fontSize: "16px",
  marginBottom: "10px",
};

const backDesc = {
  color: "rgba(255,255,255,0.65)",
  fontSize: "13px",
  lineHeight: 1.55,
};

const stateText = {
  color: "rgba(255,255,255,0.70)",
  fontSize: "13px",
  textAlign: "center",
};

const warn = {
  marginTop: "6px",
  color: "#fb7185",
  fontSize: "12px",
};

export default ProfileCard;
